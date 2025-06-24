
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Truck } from 'lucide-react';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your order. We'll send you a confirmation email shortly.</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Order Details</h2>
                  <p className="text-gray-600">Order Number: #{orderNumber}</p>
                  <p className="text-gray-600">Estimated Delivery: 2-3 business days</p>
                </div>
                
                <div className="flex justify-center space-x-8 py-6">
                  <div className="text-center">
                    <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Order Confirmed</p>
                  </div>
                  <div className="text-center">
                    <div className="h-8 w-8 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Processing</p>
                  </div>
                  <div className="text-center">
                    <Truck className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">On the way</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/')}
              className="bg-green-600 hover:bg-green-700 px-8"
            >
              Continue Shopping
            </Button>
            <p className="text-sm text-gray-500">
              You'll receive order updates via email and SMS
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;
