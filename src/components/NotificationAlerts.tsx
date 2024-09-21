import React, { useState } from 'react';

const initialAlerts = [
  { id: 1, message: 'New critical vulnerability detected', type: 'error' },
  { id: 2, message: 'Scan completed for Product A', type: 'success' },
  { id: 3, message: 'Weekly report generated', type: 'info' },
];

const NotificationAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 w-96 space-y-2 z-50">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-md shadow-md ${
            alert.type === 'error' ? 'bg-red-100 text-red-700' :
            alert.type === 'success' ? 'bg-green-100 text-green-700' :
            'bg-blue-100 text-blue-700'
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{alert.message}</p>
            <button
              onClick={() => removeAlert(alert.id)}
              className="text-sm font-medium focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationAlerts;