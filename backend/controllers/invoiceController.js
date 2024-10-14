const Invoice = require('../models/InvoiceModel');
const WasteRequest = require('../models/WasteRequestModel');

// Generate invoice
exports.generateInvoice = async (req, res) => {
    try {
        const { wasteRequestId } = req.body;
        const wasteRequest = await WasteRequest.findById(wasteRequestId);
        if (!wasteRequest) {
            return res.status(404).json({ msg: 'Waste request not found' });
        }

        let totalWeight = wasteRequest.bins.reduce((acc, bin) => acc + bin.weight, 0);
        let totalCost = 0;

        wasteRequest.bins.forEach(bin => {
            if (bin.binType === 'food waste') totalCost += bin.weight * 5;
            else if (bin.binType === 'plastic waste') totalCost += bin.weight * 10;
            else if (bin.binType === 'paper waste') totalCost += bin.weight * 8;
            else totalCost += bin.weight * 20;
        });

        const serviceCharge = totalCost * 0.08;
        totalCost += serviceCharge;

        const invoice = new Invoice({
            wasteRequest: wasteRequest._id,
            totalWeight,
            totalCost,
            serviceCharge
        });
        await invoice.save();

        return res.json({ msg: 'Invoice generated', invoice });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get invoice by ID
exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ msg: 'Invoice not found' });
        }
        return res.json(invoice);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
