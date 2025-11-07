@echo off
echo ========================================
echo  Testing Backend Connection
echo ========================================
echo.

echo Testing if backend is running on port 5000...
curl -X GET http://localhost:5000/api/user/profile 2>nul
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Backend server is NOT responding!
    echo Please make sure the backend server is running.
    echo.
) else (
    echo.
    echo [SUCCESS] Backend server is responding!
    echo.
)

echo.
echo Testing login endpoint...
curl -X POST http://localhost:5000/api/login -H "Content-Type: application/json" -d "{\"email\":\"test@test.com\",\"password\":\"test\"}" 2>nul
echo.
echo.

echo ========================================
echo Press any key to exit...
pause >nul
