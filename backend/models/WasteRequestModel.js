const mongoose = require('mongoose');
const wasteRequestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    requestDate: { type: Date, default: Date.now },
    bins: [{
        binType: { type: String, enum: ['food waste', 'plastic waste', 'paper waste', 'special'], required: true },
        weight: { type: Number, required: true },
    }],
    status: { type: String, enum: ['requested', 'in progress', 'collected', 'completed'], default: 'requested' },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Will store the driver who collects
    feedback: { type: String }
});

module.exports = mongoose.model('WasteRequest', wasteRequestSchema);