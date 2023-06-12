const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },  
  img: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  // img: {
  //   type: [String], // Array of strings to store multiple image paths
  //   required: true,
  // },
  // img: [
  //   {
  //     path: {
  //       type: String,
  //       required: true
  //     },
  //     contentType: {
  //       type: String,
  //       required: true
  //     }
  //   }
  // ],
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  size: {
    type: Number,
  },
  price: {
    type: Number
  },
  taxable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('Product', ProductSchema);
