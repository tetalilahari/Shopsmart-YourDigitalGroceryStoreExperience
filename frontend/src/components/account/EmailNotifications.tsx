
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const EmailNotifications = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    security: true
  });

  const handleSave = () => {
    localStorage.setItem('emailNotifications', JSON.stringify(notifications));
    toast.success('Email notification preferences saved!');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('emailNotifications');
    if (saved) {
      setNotifications(JSON.parse(saved));
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <span>Email Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="order-updates">Order Updates</Label>
          <Switch
            id="order-updates"
            checked={notifications.orderUpdates}
            onCheckedChange={(checked) => 
              setNotifications({...notifications, orderUpdates: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="promotions">Promotional Emails</Label>
          <Switch
            id="promotions"
            checked={notifications.promotions}
            onCheckedChange={(checked) => 
              setNotifications({...notifications, promotions: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="newsletter">Newsletter</Label>
          <Switch
            id="newsletter"
            checked={notifications.newsletter}
            onCheckedChange={(checked) => 
              setNotifications({...notifications, newsletter: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="security">Security Alerts</Label>
          <Switch
            id="security"
            checked={notifications.security}
            onCheckedChange={(checked) => 
              setNotifications({...notifications, security: checked})
            }
          />
        </div>
        
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmailNotifications;
