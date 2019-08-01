CREATE TABLE noteful_notes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  modified TIMESTAMPTZ NOT NULL DEFAULT now(),
  content TEXT,
  folderID INTEGER REFERENCES noteful_folders(id) ON DELETE CASCADE NOT NULL
);