import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useOrders } from '@/contexts/OrderContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import OrderDetailsModal from '@/components/admin/OrderDetailsModal';
import EditOrderModal from '@/components/admin/EditOrderModal';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  Info,
  Bell
} from 'lucide-react';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const { orders } = useOrders();
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  });

  // Modal states
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showOrderAlert, setShowOrderAlert] = useState(false);

  // Redirect if not admin
  React.useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const totalUsers = users.filter((u: any) => u.role === 'user').length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(order => order.status === 'Processing').length;
  const completedOrders = orders.filter(order => order.status === 'Delivered').length;

  const handleDeleteUser = (userId: string) => {
    const updatedUsers = users.filter((u: any) => u.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    toast.success('User deleted successfully');
  };

  const handleToggleUserRole = (userId: string) => {
    const updatedUsers = users.map((u: any) => 
      u.id === userId 
        ? { ...u, role: u.role === 'admin' ? 'user' : 'admin' }
        : u
    );
    setUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    toast.success('User role updated successfully');
  };

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  const handleEditOrder = (order: any) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    // Update order status in localStorage
    const storedOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    const updatedOrders = storedOrders.map((order: any) => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    localStorage.setItem('userOrders', JSON.stringify(updatedOrders));
    
    // Refresh the page to show updated data
    window.location.reload();
    toast.success('Order status updated successfully');
  };

  const handleOrderBadgeClick = () => {
    setShowOrderAlert(true);
    setTimeout(() => setShowOrderAlert(false), 5000);
    toast.success(`Orders Status: ${totalOrders} total, ${completedOrders} completed, ${pendingOrders} pending`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}!</p>
          </div>

          {/* Order Alert */}
          {showOrderAlert && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Orders Summary:</strong> Total of {totalOrders} orders placed | {completedOrders} completed | {pendingOrders} pending
              </AlertDescription>
            </Alert>
          )}

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold">{totalUsers}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold">{totalOrders}</p>
                  </div>
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                    <p className="text-2xl font-bold">{pendingOrders}</p>
                  </div>
                  <Package className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Orders Management</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="reports">Reports & Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Orders Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customerInfo.name}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleViewOrder(order)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleEditOrder(order)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user: any) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${
                              user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {user.role}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleToggleUserRole(user.id)}
                              >
                                Toggle Role
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleDeleteUser(user.id)}
                                disabled={user.role === 'admin'}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <div className="space-y-6">
                {/* Order Status Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Status Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-lg">Order Status Overview</h3>
                        <p className="text-gray-600">Click to view detailed order status information</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={handleOrderBadgeClick}
                        className="relative hover:bg-blue-50 border-blue-200"
                      >
                        <Bell className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-semibold">View Order Status</span>
                        <Badge 
                          variant="destructive" 
                          className="absolute -top-2 -right-2 px-2 py-1 text-xs"
                        >
                          {totalOrders}
                        </Badge>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reports Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Orders:</span>
                          <span className="font-semibold">{totalOrders}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Revenue:</span>
                          <span className="font-semibold">${totalRevenue.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Order Value:</span>
                          <span className="font-semibold">
                            ${totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : '0.00'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Order Status Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Processing:</span>
                          <span className="font-semibold">
                            {orders.filter(o => o.status === 'Processing').length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipped:</span>
                          <span className="font-semibold">
                            {orders.filter(o => o.status === 'Shipped').length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivered:</span>
                          <span className="font-semibold">
                            {orders.filter(o => o.status === 'Delivered').length}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      {/* Modals */}
      <OrderDetailsModal 
        order={selectedOrder}
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
      
      <EditOrderModal 
        order={selectedOrder}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdateOrderStatus}
      />
    </div>
  );
};

export default AdminDashboard;
