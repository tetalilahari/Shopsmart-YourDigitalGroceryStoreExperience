import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Star, Filter } from 'lucide-react';
import { useCart, Product } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  unit: string;
  discount?: number;
  originalPrice?: number;
}

const AllProductsPage = () => {
  const { addItem } = useCart();
  const [items, setItems] = useState<ProductItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => {
        const productsWithFallback = response.data.map((product: ProductItem) => ({
          ...product,
          image: product.image || '/fallback.jpg',
        }));
        setItems(productsWithFallback);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...Array.from(new Set(items.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleAddToCart = (item: ProductItem) => {
    const product: Product = {
      id: item.id.toString(),
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
      unit: item.unit,
    };
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
            {loading ? (
              <p className="text-gray-600">Loading products...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <p className="text-gray-600">{sortedItems.length} products found</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Filter by Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md"
                disabled={loading}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md"
                disabled={loading}
              >
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {!loading && !error && sortedItems.length === 0 && (
              <p className="text-gray-600 col-span-full text-center">No products found.</p>
            )}

            {sortedItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 relative">
                {item.discount && (
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white z-10">
                    {item.discount}% OFF
                  </Badge>
                )}
                <CardContent className="p-4">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-auto object-contain border rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = '/fallback.jpg';
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500">(4.8)</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                    <p className="text-sm text-gray-600">{item.unit}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-green-600">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProductsPage;
