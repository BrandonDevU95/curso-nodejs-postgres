const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  posty: 5432,
  user: 'brandondev',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
