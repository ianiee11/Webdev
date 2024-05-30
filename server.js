const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/writing_service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
