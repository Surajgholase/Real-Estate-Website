const express = require('express');
const router = express.Router();
const db = require('../db');
const requireAdmin = require('../middleware/auth');

// GET /api/content — public
router.get('/', (req, res) => {
  try {
    const row = db.prepare('SELECT data FROM content WHERE id = 1').get();
    if (!row) {
      return res.status(404).json({ success: false, message: 'Content not found.' });
    }
    const content = JSON.parse(row.data);
    return res.json({ success: true, content });
  } catch (err) {
    console.error('Error fetching content:', err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// PUT /api/content — protected
router.put('/', requireAdmin, (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, message: 'Content is required.' });
    }
    db.prepare('UPDATE content SET data = ? WHERE id = 1').run(JSON.stringify(content));
    return res.json({ success: true, message: 'Content updated successfully.' });
  } catch (err) {
    console.error('Error updating content:', err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
