const express = require('express');
const { generateInvoice, getInvoiceById } = require('../controllers/invoiceController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/generate', authMiddleware, adminMiddleware, generateInvoice);
router.get('/:id', authMiddleware, getInvoiceById);

module.exports = router;
