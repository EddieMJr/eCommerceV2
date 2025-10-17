/* Database Connection */
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const mysql = require("mysql2");
const fs = require ('fs');
const path = require ('path');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
}).promise(); 

(async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM shopItems');
    console.log('✅ Database connected successfully!');
    console.log('All Rows from Table!:', rows);
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
})();

module.exports = { pool };