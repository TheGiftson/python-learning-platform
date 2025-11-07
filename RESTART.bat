@echo off
echo ========================================
echo  Python Learning Platform - RESTART
echo ========================================
echo.

echo Stopping any running servers...
echo.

REM Kill any existing Node.js processes (frontend)
taskkill /F /IM node.exe >nul 2>&1

REM Kill any existing Python processes (backend)
taskkill /F /IM python.exe >nul 2>&1
taskkill /F /IM py.exe >nul 2>&1

echo Servers stopped.
echo.
timeout /t 2 >nul

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && python app.py"

echo Waiting for backend to initialize...
timeout /t 5 >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo  Servers are starting...
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
echo (The servers will keep running)
pause >nul
