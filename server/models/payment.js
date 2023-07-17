import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true,
    unique: true
  },
  paymentDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled', 'paid'],
    default: 'pending',
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentSessionId: {
    type: String,
    required: true
  },
  paymentCurrency: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment