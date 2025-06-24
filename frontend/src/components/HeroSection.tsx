
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Clock } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/all-products');
  };

  return (
    <section className="relative overflow-hidden">
      {/* Main Hero */}
      <div className="grocery-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Fresh Groceries
              <span className="block">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in">
              Shop from thousands of products and get them delivered to your doorstep in as fast as 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-3"
                onClick={handleStartShopping}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3"
                onClick={() => navigate('/deals')}
              >
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-green-600/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                <p className="text-gray-600">On orders over $35</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-green-600/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">30-Min Delivery</h3>
                <p className="text-gray-600">In select areas</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-green-600/10 p-3 rounded-full">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fresh Quality</h3>
                <p className="text-gray-600">Hand-picked products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
