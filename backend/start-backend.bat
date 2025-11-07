@echo off
echo ================================================
echo Learn Python with Giftson - Backend Setup
echo ================================================
echo.

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

echo Activating virtual environment...
call venv\Scripts\activate.bat
echo.

echo Installing/Updating dependencies...
pip install -r requirements.txt
echo.

echo Creating .env file if it doesn't exist...
if not exist ".env" (
    copy .env.example .env
    echo .env file created. Please update with your settings.
    echo.
)

echo Starting backend server...
python run.py
