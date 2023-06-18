import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific product by ID
router.get('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  console.log('data inserted');
  const productData = req.body;
  try {
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update a product by ID
router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByIdAndRemove(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;