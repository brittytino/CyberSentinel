import React, { useState } from 'react';
import { Search, Bell, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold tracking-tight">CyberSentinel</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 ${isSearchFocused ? 'text-gray-900' : 'text-gray-400'}`} />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-white focus:ring-white sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                  type="search"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:ml-4">
            <button className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-4 relative flex-shrink-0">
              <button className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition duration-150 ease-in-out">
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;