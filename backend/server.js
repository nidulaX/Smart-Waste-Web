const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const userRoutes = require('./routes/userRoutes');
const wasteRequestRoutes = require('./routes/wasteRequestRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const driverRoutes = require('./routes/driverRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow your frontend URL
    credentials: true // Allow credentials if needed
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/waste-requests', wasteRequestRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/driver', driverRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Waste Management System API is running...');
});

// Set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
