/*
  # Add phone number to contact submissions

  1. Changes
    - Add phone_number column to contact_submissions table
*/

ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS phone_number text;
