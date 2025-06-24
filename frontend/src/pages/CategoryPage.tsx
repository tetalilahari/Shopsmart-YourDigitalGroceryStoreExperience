
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Star } from 'lucide-react';
import { useCart, Product } from '@/contexts/CartContext';
import { getItemsByCategory, groceryItems } from '@/data/groceryItems';
import { toast } from 'sonner';

// Category mapping for proper slug to category name conversion
const categoryMapping: { [key: string]: string } = {
  'fresh-produce': 'Fresh Produce',
  'dairy-eggs': 'Dairy & Eggs',
  'meat-seafood': 'Meat & Seafood',
  'bakery': 'Bakery',
  'pantry': 'Pantry',
  'beverages': 'Beverages',
  'snacks': 'Snacks',
  'health-wellness': 'Health & Wellness',
  'frozen': 'Frozen'
};

const CategoryPage = () => {
  const { category } = useParams();
  const { addItem } = useCart();

  // Get items by category or show all categories
  const actualCategoryName = category ? categoryMapping[category] || category : '';
  const categoryItems = actualCategoryName ? getItemsByCategory(actualCategoryName) : [];
  const allCategories = [...new Set(groceryItems.map(item => item.category))];

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

  if (!category) {
    // Show all categories
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h1>
              <p className="text-gray-600">Browse products by category</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCategories.map((cat) => {
                const categoryProducts = getItemsByCategory(cat);
                const sampleProduct = categoryProducts[0];
                const slug = Object.keys(categoryMapping).find(key => categoryMapping[key] === cat) || 
                           cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                
                return (
                  <Card 
                    key={cat} 
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = `/category/${slug}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {sampleProduct?.image || '📦'}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                        {cat}
                      </h3>
                      <p className="text-gray-600">{categoryProducts.length} products</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const displayCategory = actualCategoryName || category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{displayCategory}</h1>
            <p className="text-gray-600">{categoryItems.length} products found</p>
          </div>

          {categoryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryItems.map((item) => (
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-600">This category doesn't have any products yet</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
