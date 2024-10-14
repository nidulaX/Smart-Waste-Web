const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({
    wasteRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteRequest', required: true },
    totalWeight: { type: Number, required: true },
    charges: { 
        foodWaste: { type: Number, default: 5 }, 
        plasticWaste: { type: Number, default: 10 }, 
        paperWaste: { type: Number, default: 8 }, 
        specialWaste: { type: Number, default: 20 }
    },
    totalCost: { type: Number, required: true }, // Automatically calculated
    serviceCharge: { type: Number, required: true }, // 8% service charge
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
