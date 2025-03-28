const express = require('express');
const router = express.Router();
const pool = require('../db-main');

router.get('/', async (req, res) => {
  const {location, radius, minSurface, maxPrice, maxResults} = req.query;
  console.log('Received query parameters:', req.query)

  try {

    let query = "SELECT * FROM proprieties WHERE 1=1";
    const params = [];

    if (minSurface) {
      params.push(minSurface)
      query += ` AND sqr_meters >= $${params.length}`;
    }

    if (maxPrice) {
      params.push(maxPrice)
      query += ` AND price <= $${params.length}`;
    }

    if (maxResults) {
      params.push(maxResults)
      query += ` LIMIT $${params.length}`;
    }

    console.log('Query:', query, 'Params:', params);
    const result = await pool.query(query, params);
    res.json(result.rows);
    console.log('Query result:', result.rows);

  } catch (err) {

    console.error('Database query error:', err);
    res.status(500).send('Error fetching properties');
  }
});

module.exports = router;
