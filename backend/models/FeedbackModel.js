const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    wasteRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteRequest', required: true },
    feedbackText: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }
});

const reportSchema = new mongoose.Schema({
    area: { type: String, required: true },
    totalWasteCollected: { type: Number, required: true },
    wasteTypeBreakdown: {
        foodWaste: { type: Number, default: 0 },
        plasticWaste: { type: Number, default: 0 },
        paperWaste: { type: Number, default: 0 },
        specialWaste: { type: Number, default: 0 }
    },
    reportDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
module.exports = mongoose.model('Report', reportSchema);
