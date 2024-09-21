import React from 'react';
import EmailSettings from '../components/EmailSettings';
import NotificationAlerts from '../components/NotificationAlerts';

const SettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <EmailSettings />
        </div>
        <div>
          <NotificationAlerts />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;