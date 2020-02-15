const { Pool } = require('pg');
const config = require('./config.js');

// Postgres config
const pool = new Pool(config);

// Event listener for DB connection open
pool.on('connect', () => console.log('Connected to the db'));

module.exports = pool;
