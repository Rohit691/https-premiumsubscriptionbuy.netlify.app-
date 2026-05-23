const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// POST /api/orders/create — WhatsApp order save karo
router.post('/create', protect, async (req, res) => {
  try {
    const { items, amount } = req.body;
    if (!items || !amount) return res.status(400).json({ message: 'Items and amount required' });

    const order = await Order.create({
      user: req.user._id,
      items: items.map(i => ({
        product: i._id,
        name: i.name,
        icon: i.icon,
        price: i.price,
        duration: i.duration,
        qty: i.qty || 1
      })),
      totalAmount: amount,
      status: 'pending',
      payment: { method: 'whatsapp' }
    });

    await User.findByIdAndUpdate(req.user._id, { $push: { orders: order._id } });

    res.json({ success: true, orderId: order._id });
  } catch (err) {
    console.error('Create order error:', err);
    res.status(500).json({ message: 'Could not create order' });
  }
});

// GET /api/orders/my — User ke orders
router.get('/my', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// GET /api/orders — Admin: sare orders
router.get('/', protect, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  try {
    const orders = await Order.find().populate('user', 'name email phone').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;
