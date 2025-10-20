import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let db;

  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    });

    const [rows] = await db.query('SELECT * FROM shopItems');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Database query failed:', err);
    res.status(500).json({ error: 'Database query failed' });
  } finally {
    if (db) await db.end();
  }
}