import express from 'express';
import productRoutes from './routes/product-route.js';
import userRoutes from './routes/user-route.js';
import orderRoutes from './routes/order-route.js';
import connectDb from './db/mongo-db.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
connectDb();

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;