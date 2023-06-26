import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

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

  console.log(req.body);

  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Check if user with the same username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }]
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Username or email already exists XXXXXXX' });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      ...userData,
      username: username,
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
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