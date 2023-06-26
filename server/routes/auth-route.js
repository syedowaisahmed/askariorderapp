import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();
router.use(bodyParser.json());

// Define a secret key for JWT
const secretKey = 'your_secret_key';

// Define the login route endpoint
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ email: email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Incorrect password
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create a token using JWT
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    // Return the token as a response
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;