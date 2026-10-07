// import 
const pool = require('../config/db');

const register = async (email, password) => {
    const result = await pool.query(`
            INSERT INTO users (email, password)
            VALUES ($1, $2) RETURNING *;`, [email, password]);

    return result.rows[0];
};

module.exports = { register };