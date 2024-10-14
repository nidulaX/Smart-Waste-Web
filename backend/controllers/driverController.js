const WasteRequest = require('../models/WasteRequestModel');
const DriverVerification = require('../models/DriverVerificationModel');

// Verify collection by driver
exports.verifyCollection = async (req, res) => {
    try {
        const { wasteRequestId, verifiedWeight, verifiedType } = req.body;
        const wasteRequest = await WasteRequest.findById(wasteRequestId);
        if (!wasteRequest) {
            return res.status(404).json({ msg: 'Waste request not found' });
        }

        const verification = new DriverVerification({
            wasteRequest: wasteRequest._id,
            verifiedWeight,
            verifiedType
        });

        await verification.save();
        wasteRequest.status = 'collected';
        await wasteRequest.save();

        return res.json({ msg: 'Collection verified', verification });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
