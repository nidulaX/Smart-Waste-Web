const mongoose = require('mongoose');
const driverVerificationSchema = new mongoose.Schema({
    wasteRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteRequest', required: true },
    verifiedWeight: { type: Number, required: true },
    verifiedType: { type: String, enum: ['food waste', 'plastic waste', 'paper waste', 'special'], required: true },
    status: { type: String, enum: ['verified', 'unverified'], default: 'verified' },
    verificationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DriverVerification', driverVerificationSchema);
