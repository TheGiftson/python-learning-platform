# 🚀 Setup Guide - Learn Python with TheGiftson

Complete step-by-step guide to get the platform running on your machine.

## 📋 Prerequisites Checklist

Before you begin, make sure you have:

- [ ] **Node.js 16+** installed ([Download](https://nodejs.org/))
- [ ] **Python 3.8+** installed ([Download](https://www.python.org/downloads/))
- [ ] **npm** (comes with Node.js)
- [ ] **pip** (comes with Python)
- [ ] A code editor (VS Code recommended)
- [ ] Two terminal windows (or use split terminal)

## ⚡ Quick Start (Windows)

### Step 1: Start the Backend Server

1. Open **Command Prompt** or **PowerShell**
2. Navigate to the backend folder:
   ```bash
   cd C:\Users\HomePC\CascadeProjects\python-learning-platform\backend
   ```

3. Run the startup script:
   ```bash
   start-backend.bat
   ```

   This script will:
   - Create a Python virtual environment
   - Install all required packages
   - Create a `.env` file
   - Start the Flask server on port 5000

4. Wait for the message: "✓ Server starting on http://localhost:5000"

### Step 2: Start the Frontend Application

1. Open a **NEW** terminal window
2. Navigate to the project root:
   ```bash
   cd C:\Users\HomePC\CascadeProjects\python-learning-platform
   ```

3. Run the startup script:
   ```bash
   start.bat
   ```

   This will:
   - Start the Vite development server
   - Open your browser automatically to http://localhost:3000

### Step 3: Create Your Account

1. The browser should open automatically to `http://localhost:3000`
2. Click **"Register"**
3. Enter your full name (this will appear on your certificate!)
4. Enter your email and create a password
5. Click **"Create Account"**
6. You're in! Start learning Python! 🎉

## 🔧 Manual Setup (All Platforms)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Create environment file:**
   ```bash
   # Windows
   copy .env.example .env
   
   # Mac/Linux
   cp .env.example .env
   ```

6. **Start the server:**
   ```bash
   python run.py
   ```

   You should see:
   ```
   ✓ Database initialized
   ✓ Server starting on http://localhost:5000
   ```

### Frontend Setup

1. **Navigate to project root:**
   ```bash
   cd ..
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This may take a few minutes...

3. **Start development server:**
   ```bash
   npm run dev
   ```

   You should see:
   ```
   VITE v5.0.8  ready in XXX ms
   ➜  Local:   http://localhost:3000/
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎯 Verifying Everything Works

### Test Backend API

Open a browser and visit:
- http://localhost:5000/api/user/profile (should show "Missing Authorization Header")

This means the backend is running! ✅

### Test Frontend

1. Visit http://localhost:3000
2. You should see the login/register page
3. Try registering a new account
4. If successful, you'll see the dashboard

## 🐛 Troubleshooting

### Backend Issues

**Problem: "Python is not recognized"**
- Solution: Install Python from python.org and add to PATH

**Problem: "Port 5000 is already in use"**
- Solution: 
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:5000 | xargs kill -9
  ```

**Problem: "Module not found" errors**
- Solution: Make sure virtual environment is activated and run:
  ```bash
  pip install -r requirements.txt
  ```

**Problem: Database errors**
- Solution: Delete `learners.db` file and restart the backend

### Frontend Issues

**Problem: "npm is not recognized"**
- Solution: Install Node.js from nodejs.org

**Problem: "Port 3000 is already in use"**
- Solution: The error message will suggest an alternative port, or:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:3000 | xargs kill -9
  ```

**Problem: "Cannot connect to backend"**
- Solution: Make sure backend is running on port 5000
- Check browser console for CORS errors
- Verify `http://localhost:5000` is accessible

**Problem: Blank page or errors**
- Solution:
  ```bash
  # Delete node_modules and reinstall
  rm -rf node_modules
  npm install
  npm run dev
  ```

### Code Execution Issues

**Problem: "Failed to execute code"**
- Verify backend is running
- Check backend terminal for errors
- Ensure RestrictedPython is installed:
  ```bash
  pip list | grep RestrictedPython
  ```

## 📊 Checking Server Status

### Backend Health Check

The backend should show:
```
✓ Database initialized
✓ Server starting on http://localhost:5000
✓ API endpoints available at http://localhost:5000/api

Press CTRL+C to stop the server
```

### Frontend Health Check

The frontend should show:
```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

## 🔐 Default Configuration

### Backend (.env file)
```
SECRET_KEY=dev-secret-key-change-in-production
JWT_SECRET_KEY=jwt-secret-key-change-in-production
DATABASE_URL=sqlite:///learners.db
```

### Frontend
- API URL: `http://localhost:5000/api`
- Dev Server: `http://localhost:3000`

## 📝 First Time User Flow

1. **Register Account**
   - Enter your full name (appears on certificate)
   - Provide email and password
   - Click "Create Account"

2. **Start Learning**
   - Browse available lessons
   - Click on "Introduction to Python"
   - Read the lesson content
   - Try the code examples

3. **Write and Run Code**
   - Modify the starter code
   - Click "Run Code" to execute
   - See real-time output
   - Click "Mark Complete" when done

4. **Track Progress**
   - View progress bar in header
   - See completion percentage
   - Track which topics you've completed

5. **Complete Projects**
   - Build guided projects
   - Submit final assessment
   - Get feedback on your code

6. **Earn Certificate**
   - Complete all 50 topics
   - Pass the final project
   - Generate your certificate
   - Download as PDF

## 🎓 Tips for Best Experience

1. **Keep Both Servers Running**
   - Don't close the terminal windows
   - Backend and frontend must both be active

2. **Use Modern Browser**
   - Chrome, Firefox, or Edge recommended
   - Enable JavaScript

3. **Save Your Work**
   - Progress is saved automatically
   - You can logout and resume anytime

4. **Complete Topics in Order**
   - Start from Beginner level
   - Progress sequentially for best learning

5. **Practice with Code**
   - Modify examples and experiment
   - Run code frequently to test understanding

## 🆘 Getting Help

If you encounter issues:

1. Check this troubleshooting guide
2. Review the main README.md
3. Check backend terminal for error messages
4. Check browser console (F12) for frontend errors
5. Ensure both servers are running

## ✅ Success Checklist

Before starting to learn, verify:

- [ ] Backend running on http://localhost:5000
- [ ] Frontend running on http://localhost:3000
- [ ] Can access login page
- [ ] Can create an account
- [ ] Can see dashboard after login
- [ ] Can click on a lesson
- [ ] Can run Python code
- [ ] Can see output from code execution

If all checked, you're ready to start learning! 🚀

---

**Happy Learning with Giftson! 🐍**
