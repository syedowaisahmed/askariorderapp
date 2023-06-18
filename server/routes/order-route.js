import express from 'express';
import Order from '../models/order.js';

const router = express.Router();

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific order by ID
router.get('/:id', async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new order
router.post('/', async (req, res) => {
  const orderData = req.body;
  try {
    const order = await Order.create(orderData);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update an order by ID
router.put('/:id', async (req, res) => {
  const orderId = req.params.id;
  const updatedOrderData = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, updatedOrderData, { new: true });
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE an order by ID
router.delete('/:id', async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByIdAndRemove(orderId);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;