# Troubleshooting Guide

## Login Error: "An error occurred"

If you're getting an error when trying to login on localhost, follow these steps:

### Step 1: Check if Backend is Running

1. Look for the **"Backend Server"** terminal window
2. It should show:
   ```
   * Running on http://127.0.0.1:5000
   * Running on http://localhost:5000
   ```
3. If you don't see this window or it's closed, the backend is NOT running

### Step 2: Check if Frontend is Running

1. Look for the **"Frontend Server"** terminal window
2. It should show:
   ```
   VITE ready in XXX ms
   Local: http://localhost:3000
   ```
3. If you don't see this window or it's closed, the frontend is NOT running

### Step 3: Restart Everything

1. **Close ALL terminal windows** (Backend and Frontend)
2. Run `RESTART.bat` again
3. **DO NOT CLOSE** the two terminal windows that open
4. Wait 5-10 seconds for both servers to fully start
5. Open your browser to `http://localhost:3000`

### Step 4: Common Errors and Solutions

#### Error: "Cannot connect to server"
**Cause:** Backend server is not running
**Solution:** 
- Make sure the "Backend Server" terminal window is open
- Check if port 5000 is already in use by another application
- Try running: `taskkill /F /IM python.exe` then restart

#### Error: "Invalid email or password"
**Cause:** Wrong credentials or user doesn't exist
**Solution:**
- If this is your first time, click "Register" instead of "Login"
- Make sure you're using the correct email and password
- Passwords are case-sensitive

#### Error: "Email already registered"
**Cause:** You're trying to register with an email that already exists
**Solution:**
- Click "Login" instead and use your existing credentials
- Or use a different email address

#### Error: "Network Error" or "ERR_NETWORK"
**Cause:** Frontend cannot reach the backend
**Solution:**
1. Check if backend is running on port 5000
2. Open `http://localhost:5000/api/health` in your browser
3. You should see: `{"status":"healthy","message":"Backend server is running"}`
4. If not, restart the backend server

### Step 5: Test Backend Connection

Run the test script:
```batch
TEST_CONNECTION.bat
```

This will test if your backend is responding correctly.

### Step 6: Check Browser Console

1. Open your browser (Chrome/Edge/Firefox)
2. Press `F12` to open Developer Tools
3. Click on the "Console" tab
4. Try to login again
5. Look for any red error messages
6. Common errors:
   - `ERR_CONNECTION_REFUSED` → Backend is not running
   - `CORS error` → Backend CORS is not configured (already fixed)
   - `404 Not Found` → Wrong API endpoint (already fixed)

### Step 7: Manual Test

Try creating a test user manually:

1. Make sure backend is running
2. Open a new terminal/PowerShell
3. Run:
```powershell
curl -X POST http://localhost:5000/api/register -H "Content-Type: application/json" -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"test123\"}"
```

If this works, you should see a response with `access_token` and user data.

### Step 8: Check Python Dependencies

Make sure all Python packages are installed:

```batch
cd backend
pip install -r requirements.txt
```

### Important Notes

1. **NEVER close the terminal windows** while using the application
2. Both Backend and Frontend must be running simultaneously
3. If you close them, you must restart using `RESTART.bat`
4. The servers run on:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:3000`

### Still Having Issues?

Check the Backend terminal window for error messages. Common issues:

1. **Port already in use**: Another application is using port 5000 or 3000
2. **Python not found**: Python is not installed or not in PATH
3. **Module not found**: Missing Python dependencies (run `pip install -r requirements.txt`)
4. **Database error**: Delete `backend/instance/learners.db` and restart

### Quick Fix Checklist

- [ ] Both terminal windows are open and running
- [ ] Backend shows "Running on http://localhost:5000"
- [ ] Frontend shows "Local: http://localhost:3000"
- [ ] Browser is accessing `http://localhost:3000` (not 5000)
- [ ] No other applications are using ports 5000 or 3000
- [ ] Python dependencies are installed
- [ ] You're using the correct login credentials

If all else fails, restart your computer and run `RESTART.bat` again.
