require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');

// Initialize DB (creates tables + seeds if needed)
require('./db');

const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,         // required for cross-origin cookies
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'realestate_dev_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,          // set true in production (HTTPS)
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
  },
}));

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api', authRoutes);
app.use('/api/content', contentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Real Estate API is running 🚀' });
});

// ─── Start server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
