const express = require('express');
const { verifyCollection } = require('../controllers/driverController');
const authMiddleware = require('../middleware/authMiddleware');
const driverMiddleware = require('../middleware/driverMiddleware');
const router = express.Router();

router.post('/verify', authMiddleware, driverMiddleware, verifyCollection);

module.exports = router;
