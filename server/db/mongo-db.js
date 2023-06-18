import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/orderapp');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};