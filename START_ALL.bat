@echo off
echo ================================================
echo Learn Python with Giftson - Complete Platform
echo ================================================
echo.
echo This will start both Backend and Frontend servers
echo.
echo Starting Backend Server...
echo.

REM Start backend in a new window
start "Backend - Learn Python with Giftson" cmd /k "cd backend && start-backend.bat"

echo Waiting for backend to initialize...
timeout /t 5 /nobreak >nul

echo.
echo Starting Frontend Server...
echo.

REM Start frontend in a new window  
start "Frontend - Learn Python with Giftson" cmd /k "start.bat"

echo.
echo ================================================
echo Both servers are starting!
echo ================================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Your browser should open automatically.
echo If not, visit: http://localhost:3000
echo.
echo Keep both terminal windows open while using the app.
echo Close this window when done.
echo.
pause
