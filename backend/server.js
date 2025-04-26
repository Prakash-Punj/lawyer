
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();


const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ Error connecting to MongoDB:", err));


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.redirect('/api/contact');
});


const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});


const FormSubmission = mongoose.model('FormSubmission', formSchema);


app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

   
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, Email, and Message are required.' });
    }

    try {
        
        const newEntry = new FormSubmission({ name, email, phone, subject, message });
        await newEntry.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to submit form' });
    }
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

