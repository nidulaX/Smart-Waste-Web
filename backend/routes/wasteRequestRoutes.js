const express = require('express');
const { createWasteRequest, getAllWasteRequests, updateWasteRequestStatus } = require('../controllers/wasteRequestController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/request', authMiddleware, createWasteRequest);
router.get('/requests', authMiddleware, adminMiddleware, getAllWasteRequests);
router.put('/requests/:id/status', authMiddleware, adminMiddleware, updateWasteRequestStatus);

module.exports = router;
