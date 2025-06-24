
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Star } from 'lucide-react';
import { useCart, Product } from '@/contexts/CartContext';
import { toast } from 'sonner';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    image: '🍌',
    category: 'Fresh Produce',
    description: 'Fresh organic bananas, perfect for snacking',
    unit: 'per bunch'
  },
  {
    id: '2',
    name: 'Fresh Avocados',
    price: 1.99,
    image: '🥑',
    category: 'Fresh Produce',
    description: 'Ripe avocados ready to eat',
    unit: 'each'
  },
  {
    id: '3',
    name: 'Greek Yogurt',
    price: 4.99,
    image: '🥛',
    category: 'Dairy',
    description: 'Creamy Greek yogurt, high in protein',
    unit: '32oz container'
  },
  {
    id: '4',
    name: 'Fresh Salmon',
    price: 12.99,
    image: '🐟',
    category: 'Seafood',
    description: 'Wild-caught Atlantic salmon fillet',
    unit: 'per lb'
  },
  {
    id: '5',
    name: 'Organic Bread',
    price: 3.49,
    image: '🍞',
    category: 'Bakery',
    description: 'Freshly baked whole grain bread',
    unit: 'per loaf'
  },
  {
    id: '6',
    name: 'Free-Range Eggs',
    price: 5.99,
    image: '🥚',
    category: 'Dairy',
    description: 'Farm fresh free-range eggs',
    unit: 'dozen'
  }
];

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleViewAllProducts = () => {
    navigate('/category');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our best-selling items and customer favorites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                {/* Product Image */}
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-500">(4.8)</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {product.unit}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-green-600">
                      ${product.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
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

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={handleViewAllProducts}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
