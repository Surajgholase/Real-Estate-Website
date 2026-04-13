const express = require('express');
const router = express.Router();

const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = '1234';

// POST /api/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.json({ success: true, message: 'Login successful.' });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials.' });
});

// POST /api/logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Logout failed.' });
    }
    res.clearCookie('connect.sid');
    return res.json({ success: true, message: 'Logged out successfully.' });
  });
});

// GET /api/auth/me — check if admin is logged in
router.get('/me', (req, res) => {
  if (req.session && req.session.isAdmin) {
    return res.json({ success: true, isAdmin: true });
  }
  return res.json({ success: true, isAdmin: false });
});

module.exports = router;
