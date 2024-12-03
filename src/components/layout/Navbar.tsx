import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

export const Navbar = () => {
  const { user } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Star className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ReviewBoost Pro</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <Link to="/dashboard">
                <Button>
                  Dashboard
                </Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </Link>
                <Link to="/auth">
                  <Button>
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};