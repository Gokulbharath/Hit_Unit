CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  project_type text,
  budget text,
  message text NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
