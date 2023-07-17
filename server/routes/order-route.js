import express from 'express';
import User from '../models/user.js';
import Order from '../models/order.js';
import Payment from '../models/payment.js';
import { authenticateToken } from '../middlewares/authenticate-token.js';
import { adminAuthorizer } from '../middlewares/admin-authorizer.js';
import { emailer, createEmail } from '../email/emailer.js';
import { SMTP_USER } from '../config.js';

const router = express.Router();

// GET all orders
router.get('/', [authenticateToken, adminAuthorizer], async (req, res) => {
  try {
    console.log('authenticated');
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/summary', async (req, res) => {
  try {
    const summary = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalOrdersCount: { 
            $sum: 1 
          },
          pendingOrders: {
            $sum: {
              $cond: { if: { $eq: ['$orderStatus', 'pending'] }, then: 1, else: 0 }
            }
          },
          completedOrders: {
            $sum: {
              $cond: { if: { $eq: ['$orderStatus', 'completed'] }, then: 1, else: 0 }
            }
          },
          totalAmount: { $sum: '$totalAmount' }
        }
      }
    ]);

    if (summary.length > 0) {
      const orderSummary = summary[0];
      res.json(orderSummary);
    } else {
      // No orders found, handle this case
      res.status(404).json({ message: 'No orders found' });
    }
  } catch (error) {
    console.error('Error retrieving order summary:', error);
    res.status(500).json({ message: 'Error retrieving order summary' });
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

// SEND email 
router.post('/order-email', [authenticateToken], async (req, res) => {
  try {
    const email = createEmail(SMTP_USER, req.user.email, 'Order Successful', 'Thank you for purchasing with us');
    emailer.sendMail(email, (error, info) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json(200);
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;