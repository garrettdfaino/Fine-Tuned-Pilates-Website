/*
  # Update contact submissions table

  1. Changes
    - Split location into city and state fields
    - Add status field with default value
    - Add created_at timestamp
    - Add RLS policies

  2. Security
    - Enable RLS on table
    - Add policy for authenticated users to read submissions
    - Add policy for anonymous users to insert submissions
*/

-- First, create a backup of existing data if needed
CREATE TABLE IF NOT EXISTS contact_submissions_backup AS 
SELECT * FROM contact_submissions;

-- Drop existing table
DROP TABLE IF EXISTS contact_submissions;

-- Create new table with updated schema
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  studio_name text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'::text
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow authenticated users to read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous users to insert submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);