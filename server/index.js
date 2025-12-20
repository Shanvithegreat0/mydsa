const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const apiRoutes = require('./routes/api');
const aiRoutes = require('./routes/ai');

app.use('/api', apiRoutes);
app.use('/api/ai', aiRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shanvi_dsa_learning')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('Shanvi DSA Learning API Running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
