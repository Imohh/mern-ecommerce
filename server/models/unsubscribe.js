const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UnsubscribeSchema = new Schema({
  email: {type: String, required: true},
});

const UnsubscribeModel = model('Unsubscribe', UnsubscribeSchema);

module.exports = UnsubscribeModel;