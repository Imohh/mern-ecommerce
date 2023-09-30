const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const NewsletterSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  couponId: {
    type: String,
    required: false,
  },
  redeem_by: {
    type: Date,
    required: false,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const NewsletterModel = model('Newsletter', NewsletterSchema);

module.exports = NewsletterModel;