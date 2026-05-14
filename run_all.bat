@echo off
echo ========================================================
echo   Gearhouse Automotive OEM Project - Startup Script
echo ========================================================

:: Check for Backend dependencies and install them
echo [1/3] Setting up Backend...
cd backend
:: Check if virtual environment exists, if not create it (optional but recommended)
if not exist venv (
    echo No virtual environment found. Creating one...
    python -m venv venv
)

:: Activate venv and install requirements
echo Installing/Updating requirements...
call venv\Scripts\activate
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
start "Gearhouse Backend" cmd /k "cd backend && call venv\Scripts\activate && uvicorn main:app --reload --port 8000"

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
