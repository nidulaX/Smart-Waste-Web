const WasteRequest = require('../models/WasteRequestModel');

// Create waste collection request
exports.createWasteRequest = async (req, res) => {
    try {
        const { bins } = req.body;
        const wasteRequest = new WasteRequest({
            user: req.user.id,
            bins
        });
        await wasteRequest.save();

        return res.status(201).json({ msg: 'Waste collection request created', wasteRequest });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all waste requests for admin

exports.getAllWasteRequests = async (req, res) => {
    try {
        const wasteRequests = await WasteRequest.find().populate('user', 'name address');
        return res.json(wasteRequests);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Update request status (for admin)
exports.updateWasteRequestStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const wasteRequest = await WasteRequest.findById(req.params.id);
        if (!wasteRequest) {
            return res.status(404).json({ msg: 'Request not found' });
        }

        wasteRequest.status = status;
        await wasteRequest.save();

        return res.json({ msg: 'Status updated', wasteRequest });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
