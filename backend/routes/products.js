const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, adminOnly } = require('../middleware/auth');

// Seed products if DB is empty
const seedProducts = [
  {name:'Canva Pro (Edu)',icon:'🎨',price:352,originalPrice:5900,duration:'12 Months',discount:94,category:'edit',bg:'#1a0e22'},
  {name:'Netflix Premium',icon:'🎬',price:480,originalPrice:6600,duration:'06 Months',discount:93,category:'ott',bg:'#1a0808'},
  {name:'ChatGPT Plus',icon:'🤖',price:999,originalPrice:12000,duration:'12 Months',discount:92,category:'ai',bg:'#081a14'},
  {name:'LinkedIn Premium',icon:'💼',price:587,originalPrice:3500,duration:'03 Months',discount:83,category:'edu',bg:'#060e1a'},
  {name:'Amazon Prime',icon:'📦',price:352,originalPrice:950,duration:'06 Months',discount:63,category:'ott',bg:'#1a1008'},
  {name:'Coursera Plus',icon:'📚',price:1764,originalPrice:9900,duration:'12 Months',discount:82,category:'edu',bg:'#081020'},
  {name:'Nord VPN',icon:'🔒',price:587,originalPrice:2100,duration:'03 Months',discount:72,category:'other',bg:'#0d081a'},
  {name:'Spotify Premium',icon:'🎵',price:250,originalPrice:1800,duration:'06 Months',discount:86,category:'ott',bg:'#061a0a'},
  {name:'Adobe Creative',icon:'🖼️',price:1499,originalPrice:18000,duration:'12 Months',discount:92,category:'edit',bg:'#1a0808'},
  {name:'YouTube Premium',icon:'▶️',price:320,originalPrice:3600,duration:'06 Months',discount:91,category:'ott',bg:'#1a0808'},
  {name:'Midjourney Pro',icon:'🎭',price:999,originalPrice:9600,duration:'12 Months',discount:90,category:'ai',bg:'#0f081a'},
  {name:'Duolingo Super',icon:'🦜',price:299,originalPrice:8400,duration:'12 Months',discount:96,category:'edu',bg:'#0b1a08'},
  {name:'Grammarly Pro',icon:'✍️',price:499,originalPrice:14400,duration:'12 Months',discount:97,category:'ai',bg:'#081a15'},
  {name:'DataCamp Pro',icon:'📊',price:2352,originalPrice:30000,duration:'12 Months',discount:92,category:'edu',bg:'#081220'},
  {name:'Zee5 Premium',icon:'🎞️',price:528,originalPrice:1000,duration:'12 Months',discount:47,category:'ott',bg:'#1a0a08'},
  {name:'Capcut Pro',icon:'🎥',price:940,originalPrice:8000,duration:'06 Months',discount:63,category:'edit',bg:'#08101a'},
  {name:'Quillbot Pro',icon:'✏️',price:234,originalPrice:2000,duration:'01 Month',discount:88,category:'ai',bg:'#0a1a0a'},
  {name:'Sony LIV',icon:'📡',price:293,originalPrice:900,duration:'06 Months',discount:67,category:'ott',bg:'#1a0808'},
  {name:'Gemini AI Pro',icon:'💎',price:1764,originalPrice:24000,duration:'12 Months',discount:93,category:'ai',bg:'#0a081a'},
  {name:'Swiggy One',icon:'🍔',price:58,originalPrice:1200,duration:'06 Months',discount:95,category:'other',bg:'#1a0e08'},
];

// GET /api/products  — public
router.get('/', async (req, res) => {
  try {
    let products = await Product.find({ isActive: true }).select('-credentials');
    // Auto-seed if empty
    if (products.length === 0) {
      await Product.insertMany(seedProducts);
      products = await Product.find({ isActive: true }).select('-credentials');
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// GET /api/products/:id — public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).select('-credentials');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// POST /api/products — admin only
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/products/:id — admin only
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/products/:id — admin only
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, { isActive: false });
    res.json({ message: 'Product removed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
