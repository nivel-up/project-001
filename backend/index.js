const express = require('express');
const cors = require('cors');
const pool = require('./db-main');


const app = express();
const PORT = 5001;

//routes

const propertiesRoutes = require('./routes/prty');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back bitch!' });
});

app.use('/prty', propertiesRoutes);

// Example route using the database connection
(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database is active. Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
})();


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

