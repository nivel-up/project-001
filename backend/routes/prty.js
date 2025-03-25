const express = require('express');
const router = express.Router();
const pool = require('../db-main');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM proprieties');
    res.json(result.rows);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).send('Error fetching properties');
  }
});

module.exports = router;
