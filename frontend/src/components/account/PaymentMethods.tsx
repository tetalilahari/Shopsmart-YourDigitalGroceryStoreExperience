
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  expiryDate?: string;
  isDefault: boolean;
}

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'card', last4: '4567', expiryDate: '12/25', isDefault: true },
    { id: '2', type: 'paypal', isDefault: false }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleAddCard = () => {
    if (!newCard.number || !newCard.expiry || !newCard.cvv || !newCard.name) {
      toast.error('Please fill in all card details');
      return;
    }

    const newMethod: PaymentMethod = {
      id: Date.now().toString(),
      type: 'card',
      last4: newCard.number.slice(-4),
      expiryDate: newCard.expiry,
      isDefault: paymentMethods.length === 0
    };

    setPaymentMethods([...paymentMethods, newMethod]);
    setNewCard({ number: '', expiry: '', cvv: '', name: '' });
    setShowAddForm(false);
    toast.success('Payment method added successfully!');
  };

  const handleRemove = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    toast.success('Payment method removed');
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
    toast.success('Default payment method updated');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Payment Methods</span>
          </div>
          <Button 
            size="sm" 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Method
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5" />
              <div>
                {method.type === 'card' ? (
                  <>
                    <p className="font-medium">•••• •••• •••• {method.last4}</p>
                    <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
                  </>
                ) : (
                  <p className="font-medium">PayPal Account</p>
                )}
                {method.isDefault && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Default</span>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              {!method.isDefault && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleSetDefault(method.id)}
                >
                  Set Default
                </Button>
              )}
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleRemove(method.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {showAddForm && (
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-medium">Add New Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="card-name">Name on Card</Label>
                <Input
                  id="card-name"
                  value={newCard.name}
                  onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  value={newCard.number}
                  onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  value={newCard.expiry}
                  onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  value={newCard.cvv}
                  onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
                  placeholder="123"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleAddCard} className="bg-green-600 hover:bg-green-700">
                Add Card
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
