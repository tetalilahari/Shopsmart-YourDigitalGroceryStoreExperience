
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';
import { toast } from 'sonner';

const PrivacySettings = () => {
  const [privacy, setPrivacy] = useState({
    profileVisibility: false,
    dataSharing: false,
    analytics: true,
    marketing: false
  });

  const handleSave = () => {
    localStorage.setItem('privacySettings', JSON.stringify(privacy));
    toast.success('Privacy settings updated!');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('privacySettings');
    if (saved) {
      setPrivacy(JSON.parse(saved));
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5" />
          <span>Privacy Settings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="profile-visibility">Profile Visibility</Label>
            <p className="text-sm text-gray-500">Make your profile visible to other users</p>
          </div>
          <Switch
            id="profile-visibility"
            checked={privacy.profileVisibility}
            onCheckedChange={(checked) => 
              setPrivacy({...privacy, profileVisibility: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="data-sharing">Data Sharing</Label>
            <p className="text-sm text-gray-500">Share data with third-party partners</p>
          </div>
          <Switch
            id="data-sharing"
            checked={privacy.dataSharing}
            onCheckedChange={(checked) => 
              setPrivacy({...privacy, dataSharing: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="analytics">Analytics</Label>
            <p className="text-sm text-gray-500">Help improve our service with usage analytics</p>
          </div>
          <Switch
            id="analytics"
            checked={privacy.analytics}
            onCheckedChange={(checked) => 
              setPrivacy({...privacy, analytics: checked})
            }
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="marketing">Marketing Communications</Label>
            <p className="text-sm text-gray-500">Receive personalized marketing content</p>
          </div>
          <Switch
            id="marketing"
            checked={privacy.marketing}
            onCheckedChange={(checked) => 
              setPrivacy({...privacy, marketing: checked})
            }
          />
        </div>
        
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;
