const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const PORT = 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URL; // Replace with your MongoDB connection string
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Payment schema
const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true }
   
});

// Create a model from the schema
const Payment = mongoose.model('Payment', paymentSchema);

// POST route to save payment information
app.post('/api/payment', async (req, res) => {
    const { name, email, contact, address, pincode} = req.body;

    // Check if all required fields are provided
    if (!name || !email || !contact || !address || !pincode) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new payment record
    const payment = new Payment({
        name,
        email,
        contact,
        address,
        pincode,
      
    });

    try {
        await payment.save();
        console.log(payment)
        res.json({ message: 'Payment information saved successfully!' });
    } catch (error) {
        console.error('Error saving payment information:', error);
        res.status(500).json({ message: 'Error saving payment information. Please try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
