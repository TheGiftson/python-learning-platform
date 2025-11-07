# Quick Fix for "Cannot connect to server" Error

## The Problem
The backend server is not running because the virtual environment wasn't activated.

## The Solution - FIXED! ✅

I've updated `RESTART.bat` to properly activate the Python virtual environment.

## How to Start the Application

### Option 1: Use RESTART.bat (Recommended)
1. Double-click `RESTART.bat`
2. Two terminal windows will open:
   - **Backend Server** - Should show "Server starting on http://localhost:5000"
   - **Frontend Server** - Should show "Local: http://localhost:3000"
3. **Keep both windows open**
4. Open your browser to `http://localhost:3000`
5. Login or Register

### Option 2: Start Manually (If RESTART.bat doesn't work)

**Terminal 1 - Backend:**
1. Double-click `START_BACKEND.bat`
2. Wait until you see: `[OK] Server starting on http://localhost:5000`

**Terminal 2 - Frontend:**
1. Double-click `START_FRONTEND.bat`
2. Wait until you see: `Local: http://localhost:3000`

**Browser:**
1. Open `http://localhost:3000`

## Verify Backend is Running

Open this URL in your browser:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "healthy",
  "message": "Backend server is running",
  "database": "connected"
}
```

## If You Still Get Errors

### Error: "python is not recognized"
**Solution:** Install Python from https://www.python.org/downloads/

### Error: "venv not found" or "No module named flask"
**Solution:** Run this in the backend folder:
```batch
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Error: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Error: "Port 5000 is already in use"
**Solution:** 
```batch
taskkill /F /IM python.exe
```
Then restart the backend.

### Error: "Port 3000 is already in use"
**Solution:**
```batch
taskkill /F /IM node.exe
```
Then restart the frontend.

## What Changed?

The `RESTART.bat` file now:
1. ✅ Activates the Python virtual environment (`venv\Scripts\activate`)
2. ✅ Uses the correct Python file (`run.py` instead of `app.py`)
3. ✅ Properly starts both servers

## Test It Now!

1. Close any open terminal windows
2. Run `RESTART.bat`
3. Wait for both servers to start
4. Go to `http://localhost:3000`
5. Try logging in!

The error should be gone! 🎉
