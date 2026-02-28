-- Run these commands in your PostgreSQL console (e.g., PSQL or PGAdmin)
-- to update the database schema with missing columns.

-- 1. Update Users Table
ALTER TABLE users ADD COLUMN IF NOT EXISTS profile_image VARCHAR(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'Owner';

-- 2. Update Vehicles Table (Adding missing columns from error message and models.py)
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

-- 3. Update Maintenance Alerts Table
DO $$ 
BEGIN 
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'maintenance_alerts') THEN
        ALTER TABLE maintenance_alerts ADD COLUMN IF NOT EXISTS description VARCHAR(255);
        ALTER TABLE maintenance_alerts ADD COLUMN IF NOT EXISTS risk_level VARCHAR(20) DEFAULT 'Low';
    END IF;
END $$;

-- 4. Update Service History Table
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'service_history') THEN
        ALTER TABLE service_history ADD COLUMN IF NOT EXISTS technician_location VARCHAR(255);
        -- Increase description size if needed
        ALTER TABLE service_history ALTER COLUMN description TYPE TEXT;
    END IF;
END $$;
