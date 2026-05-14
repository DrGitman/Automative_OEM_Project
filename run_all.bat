@echo off
echo Starting Gearhouse Automotive OEM Project...

:: Start Backend
echo Starting Backend FastAPI server...
start cmd /k "cd backend && python main.py"

:: Start Frontend
echo Starting Frontend Vite server...
start cmd /k "npm run dev"

echo Done. Backend and Frontend should be starting in separate windows.
pause
