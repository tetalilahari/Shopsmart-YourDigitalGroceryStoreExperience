const mongoose = require('mongoose');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/seedProducts.json'), 'utf-8')
);

mongoose.connect('mongodb://127.0.0.1:27017/grocery-aisle-digital-hub-main', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'shopsmart'
})
  .then(() => console.log('✅ Connected to MongoDB for seeding'))
  .catch((err) => console.error('❌ MongoDB connection failed', err));

async function seedDB() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`✅ Seeded ${products.length} products to MongoDB`);
  } catch (err) {
    console.error('❌ Seeding error:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
