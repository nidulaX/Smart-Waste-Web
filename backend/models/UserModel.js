const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    NIC: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    smartBins: [{
        binType: { type: String, enum: ['food waste', 'plastic waste', 'paper waste', 'special'], required: true },
        weight: { type: Number, default: 0 },
        isFull: { type: Boolean, default: false }
    }],
    role: { type: String, enum: ['user', 'admin', 'driver'], default: 'user' } // Default to 'user'
});

module.exports = mongoose.model('User', userSchema);
