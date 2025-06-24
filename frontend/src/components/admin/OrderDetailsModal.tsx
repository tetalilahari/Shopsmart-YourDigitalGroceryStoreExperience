
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Delivered' | 'Shipped' | 'Cancelled';
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
  };
  paymentMethod: string;
}

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsModal = ({ order, isOpen, onClose }: OrderDetailsModalProps) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Order Details - {order.id}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Order Information</h3>
              <p><span className="font-medium">Date:</span> {order.date}</p>
              <p><span className="font-medium">Total:</span> ${order.total.toFixed(2)}</p>
              <p><span className="font-medium">Payment:</span> {order.paymentMethod}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-medium">Status:</span>
                <Badge variant={
                  order.status === 'Delivered' ? 'default' : 
                  order.status === 'Shipped' ? 'secondary' :
                  order.status === 'Processing' ? 'outline' : 'destructive'
                }>
                  {order.status}
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Customer Information</h3>
              <p><span className="font-medium">Name:</span> {order.customerInfo.name}</p>
              <p><span className="font-medium">Email:</span> {order.customerInfo.email}</p>
              <p><span className="font-medium">Phone:</span> {order.customerInfo.phone}</p>
              <p><span className="font-medium">Address:</span> {order.customerInfo.address}</p>
              <p><span className="font-medium">City:</span> {order.customerInfo.city}</p>
              <p><span className="font-medium">Zip:</span> {order.customerInfo.zipCode}</p>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-2">Order Items</h3>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-3 border rounded">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;
