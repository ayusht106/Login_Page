const express = require('express');
const adminController = require('../controllers/adminController');
const validateAdminSignin = require('../middleware/validateAdminSignin');
const router = express.Router();
router.post('/signin', validateAdminSignin, adminController.signin);

module.exports = router;