const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Razorpay = require('razorpay');
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const { sendCredentials, notifyAdmin } = require('../config/email');

// Init Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// POST /api/orders/create — Create Razorpay order
router.post('/create', protect, async (req, res) => {
  try {
    const { items, amount } = req.body;
    if (!items || !amount) return res.status(400).json({ message: 'Items and amount required' });

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: `order_${Date.now()}`
    });

    // Save pending order to DB
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
      payment: { razorpayOrderId: razorpayOrder.id }
    });

    res.json({ razorpayOrderId: razorpayOrder.id, orderId: order._id });
  } catch (err) {
    console.error('Create order error:', err);
    res.status(500).json({ message: 'Could not create order' });
  }
});

// POST /api/orders/verify — Verify payment & deliver credentials
router.post('/verify', protect, async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, items } = req.body;

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: 'Payment verification failed' });
    }

    // Update order to paid
    const order = await Order.findOneAndUpdate(
      { 'payment.razorpayOrderId': razorpay_order_id },
      {
        status: 'paid',
        'payment.razorpayPaymentId': razorpay_payment_id,
        'payment.razorpaySignature': razorpay_signature
      },
      { new: true }
    );

    // Add order to user's history
    await User.findByIdAndUpdate(req.user._id, { $push: { orders: order._id } });

    // Fetch credentials for each product
    const itemsWithCreds = await Promise.all(
      order.items.map(async (item) => {
        const product = await Product.findById(item.product);
        return { ...item.toObject(), credentials: product?.credentials || {} };
      })
    );

    // Send email with credentials
    try {
      await sendCredentials(req.user.email, req.user.name, itemsWithCreds);
      await Order.findByIdAndUpdate(order._id, { credentialsSent: true, status: 'delivered' });
    } catch (emailErr) {
      console.error('Email send failed:', emailErr.message);
    }

    // Notify admin
    try {
      await notifyAdmin(order, req.user.name, req.user.email);
    } catch (e) { /* non-critical */ }

    res.json({ success: true, message: 'Payment verified & credentials sent to email' });
  } catch (err) {
    console.error('Verify order error:', err);
    res.status(500).json({ message: 'Verification error' });
  }
});

// GET /api/orders/my — Get logged-in user's orders
router.get('/my', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// GET /api/orders — Admin: get all orders
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
