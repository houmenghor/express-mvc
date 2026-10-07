const { Pool } = require('pg')
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.connect((error) => {
    if (error) {
        console.log("Connection error", error.message);
    } else {
        console.log("Connected to the database");
    }
});

// Export pool
module.exports = pool;