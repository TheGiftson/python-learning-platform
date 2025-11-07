"""
Learn Python with Giftson - Backend Server
Run this file to start the Flask backend server
"""

import os
import sys
from app import app, db

# Set UTF-8 encoding for Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

if __name__ == '__main__':
    # Create database tables if they don't exist
    with app.app_context():
        db.create_all()
        print("[OK] Database initialized")
    
    print("\n" + "="*50)
    print("Learn Python with Giftson - Backend Server")
    print("="*50)
    print("\n[OK] Server starting on http://localhost:5000")
    print("[OK] API endpoints available at http://localhost:5000/api")
    print("\nPress CTRL+C to stop the server\n")
    
    app.run(debug=True, port=5000, host='0.0.0.0')
