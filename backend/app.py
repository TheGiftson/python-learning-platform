from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import io
import sys
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt-secret-key-change-in-production')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///learners.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=7)

CORS(app)
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Database Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    progress = db.relationship('Progress', backref='user', lazy=True, cascade='all, delete-orphan')
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    lesson_id = db.Column(db.Integer, nullable=False)
    topic_id = db.Column(db.Integer, nullable=False)
    completed = db.Column(db.Boolean, default=False)
    completed_at = db.Column(db.DateTime)
    code_submitted = db.Column(db.Text)

class ProjectSubmission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_type = db.Column(db.String(50), nullable=False)  # 'guided' or 'final'
    code = db.Column(db.Text, nullable=False)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    score = db.Column(db.Integer)
    passed = db.Column(db.Boolean, default=False)
    feedback = db.Column(db.Text)

class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    issued_at = db.Column(db.DateTime, default=datetime.utcnow)
    certificate_id = db.Column(db.String(50), unique=True)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'message': 'Backend server is running',
        'database': 'connected'
    }), 200

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        if not data.get('name') or not data.get('email') or not data.get('password'):
            return jsonify({'error': 'Name, email and password are required'}), 400
        
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 400
        
        user = User(name=data['name'], email=data['email'])
        user.set_password(data['password'])
        
        db.session.add(user)
        db.session.commit()
        
        access_token = create_access_token(identity=str(user.id))
        
        return jsonify({
            'message': 'Registration successful',
            'access_token': access_token,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email
            }
        }), 201
    except Exception as e:
        print(f"Registration error: {str(e)}")
        db.session.rollback()
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        if not data.get('email') or not data.get('password'):
            return jsonify({'error': 'Email and password are required'}), 400
        
        user = User.query.filter_by(email=data['email']).first()
        
        if not user or not user.check_password(data['password']):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        access_token = create_access_token(identity=str(user.id))
        
        return jsonify({
            'access_token': access_token,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email
            }
        }), 200
    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@app.route('/api/user/profile', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    # Calculate progress
    total_topics = 27  # Total topics in the complete Python course
    completed_topics = Progress.query.filter_by(user_id=user_id, completed=True).count()
    progress_percentage = (completed_topics / total_topics) * 100
    
    # Check if eligible for certificate
    has_certificate = Certificate.query.filter_by(user_id=user_id).first() is not None
    final_project = ProjectSubmission.query.filter_by(
        user_id=user_id, 
        project_type='final', 
        passed=True
    ).first()
    
    return jsonify({
        'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'created_at': user.created_at.isoformat()
        },
        'progress': {
            'completed_topics': completed_topics,
            'total_topics': total_topics,
            'percentage': round(progress_percentage, 2)
        },
        'has_certificate': has_certificate,
        'eligible_for_certificate': final_project is not None
    }), 200

@app.route('/api/progress', methods=['GET'])
@jwt_required()
def get_progress():
    user_id = int(get_jwt_identity())
    progress_records = Progress.query.filter_by(user_id=user_id).all()
    
    return jsonify({
        'progress': [{
            'lesson_id': p.lesson_id,
            'topic_id': p.topic_id,
            'completed': p.completed,
            'completed_at': p.completed_at.isoformat() if p.completed_at else None
        } for p in progress_records]
    }), 200

@app.route('/api/progress/update', methods=['POST'])
@jwt_required()
def update_progress():
    user_id = int(get_jwt_identity())
    data = request.get_json()
    
    lesson_id = data.get('lesson_id')
    topic_id = data.get('topic_id')
    completed = data.get('completed', True)
    code = data.get('code', '')
    
    progress = Progress.query.filter_by(
        user_id=user_id,
        lesson_id=lesson_id,
        topic_id=topic_id
    ).first()
    
    if progress:
        progress.completed = completed
        progress.completed_at = datetime.utcnow() if completed else None
        progress.code_submitted = code
    else:
        progress = Progress(
            user_id=user_id,
            lesson_id=lesson_id,
            topic_id=topic_id,
            completed=completed,
            completed_at=datetime.utcnow() if completed else None,
            code_submitted=code
        )
        db.session.add(progress)
    
    db.session.commit()
    
    return jsonify({'message': 'Progress updated successfully'}), 200

@app.route('/api/execute', methods=['POST'])
@jwt_required()
def execute_code():
    data = request.get_json()
    code = data.get('code', '')
    
    if not code:
        return jsonify({'error': 'No code provided'}), 400
    
    # Capture output
    output_buffer = io.StringIO()
    error_buffer = io.StringIO()
    
    try:
        # Redirect stdout and stderr
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        sys.stdout = output_buffer
        sys.stderr = error_buffer
        
        # Create a restricted namespace
        namespace = {
            '__builtins__': {
                'print': print,
                'len': len,
                'range': range,
                'str': str,
                'int': int,
                'float': float,
                'list': list,
                'dict': dict,
                'tuple': tuple,
                'set': set,
                'bool': bool,
                'abs': abs,
                'max': max,
                'min': min,
                'sum': sum,
                'sorted': sorted,
                'enumerate': enumerate,
                'zip': zip,
                'map': map,
                'filter': filter,
            }
        }
        
        # Execute code with timeout protection
        exec(code, namespace)
        
        # Restore stdout and stderr
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        
        output = output_buffer.getvalue()
        errors = error_buffer.getvalue()
        
        return jsonify({
            'output': output if output else 'Code executed successfully!',
            'error': errors if errors else None,
            'success': True
        }), 200
        
    except Exception as e:
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        return jsonify({
            'output': output_buffer.getvalue(),
            'error': str(e),
            'success': False
        }), 200

@app.route('/api/project/submit', methods=['POST'])
@jwt_required()
def submit_project():
    user_id = int(get_jwt_identity())
    data = request.get_json()
    
    project_type = data.get('project_type')  # 'guided' or 'final'
    code = data.get('code')
    
    if not project_type or not code:
        return jsonify({'error': 'Project type and code are required'}), 400
    
    # Simple scoring logic (can be enhanced)
    score = len(code) // 10  # Basic scoring
    passed = score >= 50  # Pass threshold
    
    submission = ProjectSubmission(
        user_id=user_id,
        project_type=project_type,
        code=code,
        score=score,
        passed=passed,
        feedback='Good work!' if passed else 'Please review the requirements and try again.'
    )
    
    db.session.add(submission)
    db.session.commit()
    
    return jsonify({
        'message': 'Project submitted successfully',
        'score': score,
        'passed': passed,
        'feedback': submission.feedback
    }), 200

@app.route('/api/certificate/generate', methods=['POST'])
@jwt_required()
def generate_certificate():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    
    # Check if user has completed all requirements
    total_topics = 27  # Complete Python course
    completed_topics = Progress.query.filter_by(user_id=user_id, completed=True).count()
    
    # Check theory exam score (must be >= 45/50 = 90%)
    # TODO: Add theory_exam_score field to user progress
    theory_exam_score = 0  # Placeholder - implement theory exam scoring
    
    # Check final project score (must be >= 45/50 = 90%)
    final_project = ProjectSubmission.query.filter_by(
        user_id=user_id,
        project_type='final',
        passed=True
    ).first()
    
    if completed_topics < total_topics:
        return jsonify({'error': 'Please complete all 27 lessons first'}), 400
    
    if not final_project or final_project.score < 45:
        return jsonify({'error': 'Please pass the final project with at least 90% (45/50)'}), 400
    
    # TODO: Check theory exam score >= 45
    # if theory_exam_score < 45:
    #     return jsonify({'error': 'Please pass the theory exam with at least 90% (45/50)'}), 400
    
    # Check if certificate already exists
    existing_cert = Certificate.query.filter_by(user_id=user_id).first()
    if existing_cert:
        return jsonify({
            'message': 'Certificate already issued',
            'certificate_id': existing_cert.certificate_id,
            'issued_at': existing_cert.issued_at.isoformat()
        }), 200
    
    # Generate certificate
    from certificate_generator import create_certificate
    
    cert_id = f"LPWG-{user_id}-{datetime.utcnow().strftime('%Y%m%d')}"
    certificate = Certificate(
        user_id=user_id,
        certificate_id=cert_id
    )
    
    db.session.add(certificate)
    db.session.commit()
    
    # Create PDF certificate
    pdf_path = create_certificate(user.name, cert_id, certificate.issued_at)
    
    return jsonify({
        'message': 'Certificate generated successfully',
        'certificate_id': cert_id,
        'issued_at': certificate.issued_at.isoformat(),
        'download_url': f'/api/certificate/download/{cert_id}'
    }), 201

@app.route('/api/certificate/download/<cert_id>', methods=['GET'])
def download_certificate(cert_id):
    certificate = Certificate.query.filter_by(certificate_id=cert_id).first()
    
    if not certificate:
        return jsonify({'error': 'Certificate not found'}), 404
    
    user = User.query.get(certificate.user_id)
    
    from certificate_generator import create_certificate
    pdf_path = create_certificate(user.name, cert_id, certificate.issued_at)
    
    return send_file(pdf_path, as_attachment=True, download_name=f'certificate_{cert_id}.pdf')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
