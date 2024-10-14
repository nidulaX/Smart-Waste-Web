const mongoose = require('mongoose');
const truckAssignmentSchema = new mongoose.Schema({
    wasteRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteRequest', required: true },
    truckDriver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignedDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['assigned', 'collected'], default: 'assigned' }
});

module.exports = mongoose.model('TruckAssignment', truckAssignmentSchema);
