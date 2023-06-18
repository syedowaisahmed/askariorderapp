import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update a user by ID
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a user by ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;