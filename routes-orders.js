const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/', async (req, res) => {
  const { subject, type, pages, deadline, details } = req.body;
  try {
    const newOrder = new Order({ subject, type, pages, deadline, details });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
