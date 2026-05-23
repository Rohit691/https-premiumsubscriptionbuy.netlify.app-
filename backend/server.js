const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// =============================================
// MIDDLEWARE
// =============================================
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000', 'http://localhost:5500', 'http://127.0.0.1:5500'],
  credentials: true
}));
app.use(express.json());

// =============================================
// DATABASE CONNECTION
// =============================================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.log('⚠️  MongoDB not connected — running in demo mode');
    console.log('   Set MONGO_URI in .env to connect database');
  });

// =============================================
// ROUTES
// =============================================
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders',   require('./routes/orders'));

// Health check
app.get('/', (req, res) => res.json({ status: 'Online Subscription API running ✅' }));

// =============================================
// START SERVER
// =============================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📦 Products API: http://localhost:${PORT}/api/products`);
  console.log(`👤 Auth API:     http://localhost:${PORT}/api/auth`);
  console.log(`🛒 Orders API:   http://localhost:${PORT}/api/orders\n`);
});
