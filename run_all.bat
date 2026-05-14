@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   Gearhouse Automotive OEM Project - Startup Script
echo ========================================================

:: Check for Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not in PATH.
    echo Please install Python 3.8+ to run the backend.
    pause
    exit /b
)

:: Check for Node.js/npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm (Node.js) is not installed or not in PATH.
    echo Please install Node.js to run the frontend.
    pause
    exit /b
)

:: Check for Backend dependencies and install them
echo [1/3] Setting up Backend...
cd backend
if not exist venv (
    echo No virtual environment found. Creating one...
    python -m venv venv
)

echo Installing/Updating requirements...
:: Check which shell we are in for activation
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
) else (
    :: Fallback for other potential setups
    call venv\bin\activate
)

python -m pip install --upgrade pip
pip install -r requirements.txt
cd ..

:: Check for Frontend dependencies
echo [2/3] Setting up Frontend...
if not exist node_modules (
    echo Installing npm packages...
    call npm install
)

:: Start Backend and Frontend in separate windows
echo [3/3] Starting servers...

:: Start Backend with Uvicorn
start "Gearhouse Backend" cmd /k "cd backend && if exist venv\Scripts\activate.bat (call venv\Scripts\activate.bat) else (call venv\bin\activate) && uvicorn main:app --reload --port 8000"

:: Start Frontend with Vite
start "Gearhouse Frontend" cmd /k "npm run dev"

echo.
echo ========================================================
echo   Servers are starting in separate windows!
echo   Backend: http://localhost:8000
echo   Frontend: http://localhost:5173
echo ========================================================
echo.
pause
