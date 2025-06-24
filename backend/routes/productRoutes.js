const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const mappedProducts = products.map(p => ({
      id: p._id.toString(), // Ensures frontend receives a proper 'id'
      name: p.name,
      price: p.price,
      image: p.image,
      category: p.category,
      description: p.description,
      unit: p.unit,
      discount: p.discount,
      originalPrice: p.originalPrice
    }));

    console.log(`✅ Returned ${mappedProducts.length} products`);
    res.json(mappedProducts);
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
});

// POST /api/products/seed - Load products from products-seed.json
router.post('/seed', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/products-seed.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);

    await Product.deleteMany({});
    const inserted = await Product.insertMany(products);

    console.log(`✅ Seeded ${inserted.length} products`);
    res.status(201).json({ message: `Seeded ${inserted.length} products.` });
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    res.status(500).json({ message: 'Seeding failed', error });
  }
});

module.exports = router;
