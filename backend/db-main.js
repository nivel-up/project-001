// db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'PlasfondBarrerMoi',
  database: 'main_db'
});

module.exports = pool;
