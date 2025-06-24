const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String,
  unit: String
});

module.exports = mongoose.model('Product', productSchema);
