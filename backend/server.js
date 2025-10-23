import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './db.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist'))); // Serve React build

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