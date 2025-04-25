// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// ✅ Connect to MongoDB (right after dotenv)
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Define a schema for form submissions
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Create a model for form submissions
const FormSubmission = mongoose.model('FormSubmission', formSchema);

// POST route to save form submissions
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Check if required fields are missing
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, Email, and Message are required.' });
    }

    try {
        // Save form data to MongoDB
        const newEntry = new FormSubmission({ name, email, phone, subject, message });
        await newEntry.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to submit form' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
