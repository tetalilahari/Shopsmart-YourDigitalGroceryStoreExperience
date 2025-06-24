
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Star, Leaf } from 'lucide-react';
import { useCart, Product } from '@/contexts/CartContext';
import { getFreshItems } from '@/data/groceryItems';
import { toast } from 'sonner';

const FreshPage = () => {
  const { addItem } = useCart();
  const freshItems = getFreshItems();

  const handleAddToCart = (item: any) => {
    const product: Product = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
      unit: item.unit
    };
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Leaf className="h-8 w-8 mr-3 text-green-500" />
              Fresh Produce
            </h1>
            <p className="text-gray-600">Hand-picked fresh fruits and vegetables</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freshItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.image}
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
                    <p className="text-sm text-gray-600">{item.unit}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-green-600">
                          ${item.price}
                        </span>
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

export default FreshPage;
