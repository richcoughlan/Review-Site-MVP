import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star, LogOut, BarChart, Info, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { signOut } from '../../lib/auth';
import { useAuthStore } from '../../store/authStore';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <BarChart className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/learn-more"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn More
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <Info className="h-4 w-4 mr-2" />
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user?.name}</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};