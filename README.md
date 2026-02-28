# Automative_OEM_Project
A small system for a car manufacturer that helps customers track their vehicle’s maintenance history.

# Gearhouse Automotive OEM Project

A premium vehicle fleet management platform featuring real-time diagnostics, maintenance tracking, and workshop bookings.

## System Overview
- **Backend**: FastAPI (Python) with SQLAlchemy ORM and PostgreSQL.
- **Frontend**: React (Vite) with TailwindCSS and Premium UI components.
- **Database**: PostgreSQL storing users, vehicles, service history, and appointments.

## Getting Started

### 1. Backend Setup
1. Navigate to the `backend/` directory.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python main.py
   ```
   The backend will start at `http://localhost:8000`.

### 2. Frontend Setup
1. Navigate to the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Access the dashboard at `http://localhost:5173`.

## Key Features
- **Dashboard**: Real-time stats and fleet overview.
- **My Vehicles**: Full vehicle management (Add/Edit/Delete).
- **Maintenance**: Interactive service logs and AI maintenance predictions.
- **Bookings**: Dynamic calendar for workshop session management.