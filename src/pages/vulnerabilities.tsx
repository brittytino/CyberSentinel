import React from 'react';
import VulnerabilityCheck from '../components/VulnerabilityCheck';
import VulnerabilityList from '../components/VulnerabilityList';

const VulnerabilitiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Vulnerability Management</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <VulnerabilityCheck />
        </div>
        <div>
          <VulnerabilityList />
        </div>
      </div>
    </div>
  );
};

export default VulnerabilitiesPage;