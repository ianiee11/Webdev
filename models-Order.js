const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  type: { type: String, required: true },
  pages: { type: Number, required: true },
  deadline: { type: Date, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);
