-- db_init.sql
CREATE TABLE IF NOT EXISTS proprieties (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  currency VARCHAR(255) NOT NULL,
  sqr_meters VARCHAR(255) NOT NULL,
  main_image VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
