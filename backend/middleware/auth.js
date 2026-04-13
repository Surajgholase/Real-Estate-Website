// Middleware: Check if user is logged in via session
function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  return res.status(401).json({ success: false, message: 'Unauthorized. Please log in.' });
}

module.exports = requireAdmin;
