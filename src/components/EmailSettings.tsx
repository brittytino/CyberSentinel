import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const EmailSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email settings updated:', { emailNotifications, email });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Email Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-between">
          <label htmlFor="email-notifications" className="text-sm font-medium text-gray-700">
            Email Notifications
          </label>
          <Switch
            id="email-notifications"
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            placeholder="your@email.com"
          />
        </div>
        <Button type="submit" className="w-full">
          Save Settings
        </Button>
      </form>
    </div>
  );
};

export default EmailSettings;