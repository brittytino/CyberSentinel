import React, { useState } from 'react';

const EmailSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <input
            type="checkbox"
            id="email-notifications"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="w-10 h-5 bg-gray-200 rounded-full appearance-none cursor-pointer 
                       checked:bg-blue-500 focus:outline-none transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 
                     transition duration-200"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default EmailSettings;
