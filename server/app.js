import express from 'express';
import productRoutes from './routes/product-route.js';
import userRoutes from './routes/user-route.js';
import orderRoutes from './routes/order-route.js';
import authRoutes from './routes/auth-route.js';
import connectDb from './db/mongo-db.js';
import { createSocketServer } from './socket/socket.js';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
connectDb();

// create Socket Server
createSocketServer(app);

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

export default app;