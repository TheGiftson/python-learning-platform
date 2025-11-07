# Learn Python with Giftson 🐍

A complete, full-stack Python learning platform that takes you from beginner to professional level. Features user accounts, progress tracking, real Python code execution, and certificate generation!

## ✨ Features

### 🔐 **User Authentication**
- Secure user registration and login
- Personal learning accounts
- Progress saved automatically
- JWT-based authentication

### 📚 **Complete Structured Course**
- **50+ Topics** organized from Beginner → Intermediate → Advanced → Pro
- Sequential learning path - start from basics, progress to advanced
- Interactive lessons with detailed explanations
- Code examples and exercises

### 💻 **Real Python Code Execution**
- Execute actual Python code in a sandboxed environment
- See real-time output and errors
- Safe execution using RestrictedPython
- Interactive code editor with syntax highlighting

### 📊 **Progress Tracking**
- Track completion of each topic
- Visual progress indicators
- See your learning journey
- Resume where you left off

### 🎯 **Hands-On Projects**
- Guided project with step-by-step instructions
- Final assessment project to test your skills
- Submit code for evaluation
- Get feedback on your work

### 🏆 **Certificate of Completion**
- Earn an official certificate upon course completion
- Requirements: Complete all 50 topics + pass final project
- Beautiful PDF certificate with your name
- Unique certificate ID for verification
- Download and share your achievement

### 🎨 **Beautiful Modern UI**
- Clean, responsive design
- Gradient themes and smooth animations
- Mobile-friendly interface
- Dark theme code editor

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **CodeMirror 6** - Code editor
- **Axios** - API communication
- **Lucide React** - Icons

### Backend
- **Flask** - Python web framework
- **SQLAlchemy** - Database ORM
- **JWT** - Authentication
- **RestrictedPython** - Safe code execution
- **ReportLab** - PDF certificate generation
- **SQLite** - Database (easily upgradable to PostgreSQL)

## 🚀 Getting Started

### Prerequisites

- **Node.js 16+** and npm (for frontend)
- **Python 3.8+** (for backend)
- **pip** (Python package manager)

### Quick Start (Easiest Method)

#### Windows Users:

1. **Start Backend:**
   ```bash
   cd backend
   start-backend.bat
   ```
   This will create a virtual environment, install dependencies, and start the Flask server on `http://localhost:5000`

2. **Start Frontend (in a new terminal):**
   ```bash
   start.bat
   ```
   This will start the React app on `http://localhost:3000`

3. **Open your browser** and visit `http://localhost:3000`

### Manual Installation

#### Backend Setup:

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Create `.env` file:
   ```bash
   copy .env.example .env
   ```

6. Start the backend server:
   ```bash
   python run.py
   ```

#### Frontend Setup:

1. Navigate to project root:
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser

## 📁 Project Structure

```
learn-python-with-giftson/
├── backend/                    # Flask backend
│   ├── app.py                 # Main Flask application
│   ├── certificate_generator.py  # PDF certificate creation
│   ├── run.py                 # Server startup script
│   ├── requirements.txt       # Python dependencies
│   ├── .env.example          # Environment variables template
│   ├── start-backend.bat     # Windows startup script
│   └── certificates/         # Generated certificates (auto-created)
│
├── src/                       # React frontend
│   ├── components/
│   │   ├── Auth.jsx          # Login/Register
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── LessonView.jsx    # Lesson viewer
│   │   ├── ProjectView.jsx   # Project builder
│   │   ├── AssignmentView.jsx # Assignment tester
│   │   ├── CertificateView.jsx # Certificate management
│   │   └── CodeEditor.jsx    # Code editor component
│   ├── services/
│   │   └── api.js            # API communication
│   ├── data/
│   │   └── lessons.js        # Course content
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── package.json              # Frontend dependencies
├── start.bat                 # Frontend startup script
└── README.md                 # This file
```

## 📚 Complete Course Curriculum

### 🟢 Beginner Level (Lessons 1-2)
**Lesson 1: Introduction to Python**
- Hello World & Print Statements
- Variables & Data Types

**Lesson 2: Control Flow**
- If Statements & Conditions
- For Loops & Iteration

### 🔵 Intermediate Level (Lessons 3-4)
**Lesson 3: Functions & Modules**
- Defining Functions
- Lists & List Methods

**Lesson 4: Dictionaries & Sets**
- Working with Dictionaries
- Key-Value Pairs

### 🟣 Advanced Level (Lessons 5-6)
**Lesson 5: Object-Oriented Programming**
- Classes and Objects
- Inheritance & Methods

**Lesson 6: File Handling & Exceptions**
- File Operations (Read/Write)
- Exception Handling & Error Management

### 🔴 Pro Level (Lessons 7-8)
**Lesson 7: Advanced Python Concepts**
- List Comprehensions & Generators
- Decorators & Function Enhancement

**Lesson 8: Working with APIs & Web**
- HTTP Requests
- JSON Data Handling

## 🎓 How to Earn Your Certificate

1. **Register** for an account with your name
2. **Complete all 50 topics** in the course (progress tracked automatically)
3. **Build the guided project** to practice your skills
4. **Pass the final assessment project** (must achieve passing score)
5. **Generate your certificate** with your name and unique ID
6. **Download and share** your achievement!

## 🔒 Security Features

- Password hashing with Werkzeug
- JWT token-based authentication
- Sandboxed Python code execution (RestrictedPython)
- CORS protection
- SQL injection prevention (SQLAlchemy ORM)

## 📊 Database Schema

### Users Table
- ID, Name, Email, Password Hash
- Created At timestamp

### Progress Table
- User ID, Lesson ID, Topic ID
- Completion status and timestamp
- Code submissions

### Project Submissions Table
- User ID, Project Type (guided/final)
- Code, Score, Pass/Fail status
- Feedback

### Certificates Table
- User ID, Certificate ID
- Issue date

## 🌐 API Endpoints

### Authentication
- `POST /api/register` - Create new account
- `POST /api/login` - User login
- `GET /api/user/profile` - Get user profile & progress

### Progress
- `GET /api/progress` - Get user's progress
- `POST /api/progress/update` - Update topic completion

### Code Execution
- `POST /api/execute` - Execute Python code safely

### Projects
- `POST /api/project/submit` - Submit project for grading

### Certificates
- `POST /api/certificate/generate` - Generate certificate
- `GET /api/certificate/download/<id>` - Download certificate PDF

## 🎯 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social authentication (Google, GitHub)
- [ ] Community forums and discussions
- [ ] Code sharing and peer review
- [ ] Video tutorials integration
- [ ] Gamification (badges, leaderboards, streaks)
- [ ] Mobile app (React Native)
- [ ] More advanced topics (Machine Learning, Web Scraping, etc.)
- [ ] AI-powered code hints and debugging
- [ ] Live coding sessions
- [ ] Certificate verification portal

## 🐛 Troubleshooting

### Backend won't start
- Ensure Python 3.8+ is installed: `python --version`
- Check if port 5000 is available
- Verify all dependencies are installed: `pip list`

### Frontend won't start
- Ensure Node.js 16+ is installed: `node --version`
- Delete `node_modules` and run `npm install` again
- Check if port 3000 is available

### Code execution not working
- Verify backend is running on `http://localhost:5000`
- Check browser console for API errors
- Ensure RestrictedPython is installed in backend

### Can't generate certificate
- Complete all 50 topics first
- Pass the final project assessment
- Check backend logs for errors

## 📝 License

MIT License - Feel free to use this project for learning and teaching!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍🏫 About

**Learn Python with Giftson** is a comprehensive, full-stack learning platform designed to take complete beginners to professional Python programmers through structured, interactive lessons and hands-on projects.

---

**Happy Learning! Start your Python journey today! 🚀🐍**
