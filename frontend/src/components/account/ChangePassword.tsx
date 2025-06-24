
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

const ChangePassword = () => {
  const { user } = useAuth();
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleChangePassword = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      toast.error('Please fill in all fields');
      return;
    }

    if (passwords.new !== passwords.confirm) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwords.new.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    // In a real app, you would verify the current password and update it
    // For demo purposes, we'll just simulate the process
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = storedUsers.findIndex((u: any) => u.id === user?.id);
    
    if (userIndex !== -1) {
      // Verify current password (simplified for demo)
      if (storedUsers[userIndex].password !== passwords.current) {
        toast.error('Current password is incorrect');
        return;
      }
      
      // Update password
      storedUsers[userIndex].password = passwords.new;
      localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
      
      setPasswords({ current: '', new: '', confirm: '' });
      toast.success('Password changed successfully!');
    } else {
      toast.error('User not found');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lock className="h-5 w-5" />
          <span>Change Password</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="current-password">Current Password</Label>
          <Input
            id="current-password"
            type="password"
            value={passwords.current}
            onChange={(e) => setPasswords({...passwords, current: e.target.value})}
            placeholder="Enter current password"
          />
        </div>
        
        <div>
          <Label htmlFor="new-password">New Password</Label>
          <Input
            id="new-password"
            type="password"
            value={passwords.new}
            onChange={(e) => setPasswords({...passwords, new: e.target.value})}
            placeholder="Enter new password"
          />
        </div>
        
        <div>
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input
            id="confirm-password"
            type="password"
            value={passwords.confirm}
            onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
            placeholder="Confirm new password"
          />
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Password requirements:</p>
          <ul className="list-disc list-inside mt-1">
            <li>At least 6 characters long</li>
            <li>Should contain both letters and numbers</li>
          </ul>
        </div>
        
        <Button onClick={handleChangePassword} className="bg-green-600 hover:bg-green-700">
          Change Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
