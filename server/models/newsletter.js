const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const NewsletterSchema = new Schema({
  email: {type: String, required: true},
});

const NewsletterModel = model('Newsletter', NewsletterSchema);

module.exports = NewsletterModel;