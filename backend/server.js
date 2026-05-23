const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// MongoDB connect with detailed error
const MONGO = process.env.MONGO_URI;
console.log('MONGO_URI found:', MONGO ? 'YES ✅' : 'NO ❌');

if (MONGO) {
  mongoose.connect(MONGO, {
    serverSelectionTimeoutMS: 10000
  })
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.log('❌ MongoDB Error:', err.message));
} else {
  console.log('⚠️ MONGO_URI not set in environment variables');
}

app.use('/api/auth',     require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders',   require('./routes/orders'));

app.get('/', (req, res) => res.json({ 
  status: 'API running ✅',
  mongo: mongoose.connection.readyState === 1 ? 'Connected ✅' : 'Not connected ❌'
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`ENV variables: MONGO_URI=${process.env.MONGO_URI ? 'SET' : 'NOT SET'}`);
});
