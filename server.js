const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can use any available port

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://mrgowdacr2018:Mrg%409066052004@cluster0.gqhsoos.mongodb.net/Data?tls=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the registration data
const registrationSchema = new mongoose.Schema({
  fullName: String,
  contactNumber: String,
  email: String,
  previousCourse: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

// Handle form submissions
app.post('/submit_form', async (req, res) => {
  try {
    const formData = req.body;
    const registration = new Registration(formData);
    await registration.save();
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
