
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmailNotifications from './EmailNotifications';
import PrivacySettings from './PrivacySettings';
import PaymentMethods from './PaymentMethods';
import ChangePassword from './ChangePassword';

const SettingsTab = () => {
  return (
    <Tabs defaultValue="notifications" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="payments">Payments</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <TabsContent value="notifications">
        <EmailNotifications />
      </TabsContent>

      <TabsContent value="privacy">
        <PrivacySettings />
      </TabsContent>

      <TabsContent value="payments">
        <PaymentMethods />
      </TabsContent>

      <TabsContent value="password">
        <ChangePassword />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTab;
