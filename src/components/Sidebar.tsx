import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, BarChart2, Package, Shield, Settings, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart2 },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Vulnerabilities', href: '/vulnerabilities', icon: Shield },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-gray-800 overflow-y-auto transition duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-xl font-semibold">CyberSentinel</span>
        </div>
        <nav className="mt-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 ${
                isActive(item.href)
                  ? 'text-white bg-gray-900'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <item.icon
                className={`mr-4 h-6 w-6 ${
                  isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-5 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;