
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Apple, Milk, Fish, Cookie, Carrot, Coffee, ShoppingBag, Heart } from 'lucide-react';

const categories = [
  {
    name: 'Fresh Produce',
    slug: 'fresh-produce',
    dataCategory: 'Fresh Produce',
    icon: Apple,
    color: 'bg-green-500',
    description: 'Fruits & Vegetables'
  },
  {
    name: 'Dairy & Eggs',
    slug: 'dairy-eggs',
    dataCategory: 'Dairy & Eggs',
    icon: Milk,
    color: 'bg-blue-500',
    description: 'Milk, Cheese & More'
  },
  {
    name: 'Meat & Seafood',
    slug: 'meat-seafood',
    dataCategory: 'Meat & Seafood',
    icon: Fish,
    color: 'bg-red-500',
    description: 'Fresh & Frozen'
  },
  {
    name: 'Bakery',
    slug: 'bakery',
    dataCategory: 'Bakery',
    icon: Cookie,
    color: 'bg-amber-500',
    description: 'Bread & Pastries'
  },
  {
    name: 'Pantry',
    slug: 'pantry',
    dataCategory: 'Pantry',
    icon: Carrot,
    color: 'bg-orange-500',
    description: 'Canned & Dry Goods'
  },
  {
    name: 'Beverages',
    slug: 'beverages',
    dataCategory: 'Beverages',
    icon: Coffee,
    color: 'bg-purple-500',
    description: 'Drinks & Coffee'
  },
  {
    name: 'Snacks',
    slug: 'snacks',
    dataCategory: 'Snacks',
    icon: ShoppingBag,
    color: 'bg-pink-500',
    description: 'Chips & Treats'
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    dataCategory: 'Health & Wellness',
    icon: Heart,
    color: 'bg-teal-500',
    description: 'Vitamins & Supplements'
  }
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    navigate(`/category/${slug}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of fresh products organized by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-6 text-center">
                <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
