const { check, validationResult } = require('express-validator');

// middleware function for admin sign-in validation
const validateAdminSignin = [
  check('email')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),

  // Ensure password is at least 6 characters long
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateAdminSignin;