const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name:     String,
    icon:     String,
    price:    Number,
    duration: String,
    qty:      { type: Number, default: 1 }
  }],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'paid', 'delivered', 'failed'],
    default: 'pending'
  },
  payment: {
    razorpayOrderId:   { type: String },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    method:            { type: String, default: 'razorpay' }
  },
  credentialsSent: { type: Boolean, default: false },
  createdAt:       { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
