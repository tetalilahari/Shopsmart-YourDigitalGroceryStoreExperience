const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/grocery-aisle-digital-hub-main', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'shopsmart', // 💡 ensures correct DB
})
  .then(() => console.log('✅ MongoDB connected to "shopsmart" database'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('ShopSmart backend is running 🚀');
});

// ✅ Product API route
app.use('/api/products', productRoutes);

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
