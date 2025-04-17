/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `studio_name` (text)
      - `location` (text)
      - `email` (text)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to read all submissions
    - Add policy for anonymous users to insert submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  studio_name text NOT NULL,
  location text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow anonymous users to insert submissions
CREATE POLICY "Allow anonymous users to insert submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);