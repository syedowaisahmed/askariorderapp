import express from 'express';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '../config.js';
import { authenticateToken } from '../middlewares/authenticate-token.js';

const router = express.Router();
const stripe = new Stripe(STRIPE_SECRET_KEY);

// Create stripe checkout session
router.post('/checkout', [authenticateToken], async (req, res) => {
  const cart = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: req.user.email,
    line_items: cart.items.map((item) => ({
      price_data: {
        currency: 'PKR',
        product_data: {
          name: item.productName
        },
        unit_amount: item.totalAmount * 100
      },
      quantity: item.qty
    })),
    mode: 'payment',
    success_url: 'http://localhost:4200/payment-success',
    cancel_url: 'http://localhost:4200/payment-cancel'
  });

  res.json({ sessionUrl: session.url, cart });
});

export default router;