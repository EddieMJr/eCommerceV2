import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { Server } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist'))); // Serve React build

// Database connection pool
let db;
(async () => {
  try {
    db = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PW
    });

    console.log('Loaded ENV:', {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PW ? '✅ (hidden)' : '❌ MISSING',
      name: process.env.DB_NAME,
    });

    // Test connection
    await db.query('SELECT 1');
    console.log('✅ Connected to database');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
})();

// API Routes
app.get('/api/test', (req, res) => res.send('✅ Backend is live!'));

app.get('/api/shopItems', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM shopItems');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Catch-all route for React SPA
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is LIVE on port ${PORT}!`);
});