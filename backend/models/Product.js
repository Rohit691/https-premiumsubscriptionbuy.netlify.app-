const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:          { type: String, required: true, trim: true },
  icon:          { type: String, default: '📦' },
  price:         { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  duration:      { type: String, required: true },
  discount:      { type: Number, required: true },
  category:      { type: String, enum: ['ott', 'ai', 'edu', 'edit', 'other'], required: true },
  bg:            { type: String, default: '#111118' },
  description:   { type: String, default: 'Premium Access' },
  stock:         { type: Number, default: 999 },
  isActive:      { type: Boolean, default: true },
  // Credentials stored here (shown only after purchase)
  credentials: {
    email:    { type: String, default: '' },
    password: { type: String, default: '' },
    note:     { type: String, default: '' }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
