const { Pool } = require('pg');
const config = require('./config.js');

// Postgres config
const pool = new Pool(config);

// Event listener for DB connection open
pool.on('connect', () => console.log('Yulia connected you to Postgres!'));

pool.on('error', (err) => console.log('PostgreSQL internal error: ', err));

module.exports = pool;