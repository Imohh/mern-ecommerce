const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true, // Make sure user is required
  // },
  // order: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Order',
  //   required: true, // Make sure order is required
  // },
  // paymentId: {
  //   type: String,
  //   required: true,
  // },
  unit_amount: {
    type: String,
    required: true,
  },
  paymentDescription: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
  // Add other payment-related fields here
});

module.exports = mongoose.model('Payment', PaymentSchema);
