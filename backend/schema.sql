-- Gearhouse Fleet Management System - Database Schema
-- Alignment with ERD and UI Designs

/* 
  UNCOMMENT THE SECTION BELOW IF YOU WANT TO RESET YOUR DATABASE (DANGER: THIS DELETES ALL DATA)
  DROP TABLE IF EXISTS spare_parts CASCADE;
  DROP TABLE IF EXISTS insurance CASCADE;
  DROP TABLE IF EXISTS notifications CASCADE;
  DROP TABLE IF EXISTS appointments CASCADE;
  DROP TABLE IF EXISTS maintenance_alerts CASCADE;
  DROP TABLE IF EXISTS service_parts CASCADE;
  DROP TABLE IF EXISTS service_history CASCADE;
  DROP TABLE IF EXISTS vehicles CASCADE;
  DROP TABLE IF EXISTS users CASCADE;
*/

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255),
    role VARCHAR(20) DEFAULT 'Owner',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Vehicles Table
CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INTEGER,
    vin VARCHAR(17) UNIQUE,
    license_plate VARCHAR(20),
    color VARCHAR(20),
    mileage FLOAT DEFAULT 0.0,
    engine_cc VARCHAR(20),
    engine_type VARCHAR(50),
    transmission VARCHAR(50),
    fuel_capacity VARCHAR(20),
    fuel_type VARCHAR(50),
    last_service_date TIMESTAMP,
    service_interval INTEGER DEFAULT 10000,
    status VARCHAR(20) DEFAULT 'In Operation',
    image_url VARCHAR(255),
    risk_level VARCHAR(20) DEFAULT 'Low',
    health_score INTEGER DEFAULT 100
);

-- 3. Service History Table
CREATE TABLE IF NOT EXISTS service_history (
    id SERIAL PRIMARY KEY,
    vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
    service_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mileage FLOAT,
    cost FLOAT DEFAULT 0.0,
    description TEXT,
    service_type VARCHAR(50),
    technician_location VARCHAR(255)
);

-- 4. Service Parts Table
CREATE TABLE IF NOT EXISTS service_parts (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES service_history(id) ON DELETE CASCADE,
    part_name VARCHAR(100) NOT NULL,
    cost FLOAT NOT NULL
);

-- 5. Maintenance Alerts Table
CREATE TABLE IF NOT EXISTS maintenance_alerts (
    id SERIAL PRIMARY KEY,
    vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
    alert_type VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    status VARCHAR(20) DEFAULT 'Open',
    severity VARCHAR(20),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
    service_center VARCHAR(100),
    location_address VARCHAR(255),
    service_type VARCHAR(50),
    preferred_date TIMESTAMP,
    preferred_time VARCHAR(50),
    notes TEXT,
    status VARCHAR(20) DEFAULT 'Confirmed',
    estimated_duration VARCHAR(50),
    estimated_cost FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Notifications Table
CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    message TEXT,
    category VARCHAR(50),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Insurance Table
CREATE TABLE IF NOT EXISTS insurance (
    id SERIAL PRIMARY KEY,
    vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
    provider VARCHAR(100),
    policy_number VARCHAR(50),
    expiry_date TIMESTAMP,
    premium_amount FLOAT
);

-- 9. Spare Parts (Inventory) Table
CREATE TABLE IF NOT EXISTS spare_parts (
    id SERIAL PRIMARY KEY,
    part_name VARCHAR(100) NOT NULL,
    part_number VARCHAR(50) UNIQUE,
    price FLOAT,
    stock_quantity INTEGER DEFAULT 0
);

-----------------------------------------------------------
-- 10. SYNC / MIGRATION SECTION (Run if you see "UndefinedColumn" errors)
-----------------------------------------------------------
-- These commands add the missing columns to existing tables without deleting your data.

-- Update Users
ALTER TABLE users ADD COLUMN IF NOT EXISTS profile_image VARCHAR(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'Owner';

-- Update Vehicles
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS engine_cc VARCHAR(20);
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS engine_type VARCHAR(50);
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS transmission VARCHAR(50);
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS fuel_capacity VARCHAR(20);
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS fuel_type VARCHAR(50);
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS last_service_date TIMESTAMP;
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS service_interval INTEGER DEFAULT 10000;
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'In Operation';
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS health_score INTEGER DEFAULT 100;
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS risk_level VARCHAR(20) DEFAULT 'Low';

-- Update Maintenance Alerts
ALTER TABLE maintenance_alerts ADD COLUMN IF NOT EXISTS description VARCHAR(255);

-- Update Service History
ALTER TABLE service_history ADD COLUMN IF NOT EXISTS technician_location VARCHAR(255);
ALTER TABLE service_history ALTER COLUMN description TYPE TEXT;
