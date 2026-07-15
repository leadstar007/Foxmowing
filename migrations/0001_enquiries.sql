CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('customer', 'franchise')),
  created_at INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  source TEXT NOT NULL,
  payload_json TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS enquiries_kind_created_idx ON enquiries(kind, created_at DESC);

