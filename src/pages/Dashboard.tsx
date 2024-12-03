import React, { useEffect } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { BusinessStats } from '../components/dashboard/BusinessStats';
import { ReviewsList } from '../components/dashboard/ReviewsList';
import { QRCodeSection } from '../components/dashboard/QRCodeSection';
import { BusinessSettings } from '../components/dashboard/BusinessSettings';
import { ReviewChart } from '../components/dashboard/ReviewChart';
import { useBusinessStore } from '../store/businessStore';
import { useAuthStore } from '../store/authStore';
import { mockBusinesses, mockReviews } from '../lib/mockData';

export const Dashboard = () => {
  const { user } = useAuthStore();
  const { businesses, setBusinesses, reviews, setReviews, loading } = useBusinessStore();

  useEffect(() => {
    // Initialize with mock data for now
    // In production, this would fetch from Firebase
    if (businesses.length === 0 && user) {
      setBusinesses(mockBusinesses);
      setReviews(mockReviews);
    }
  }, [user, businesses.length, setBusinesses, setReviews]);

  if (loading || businesses.length === 0) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <BusinessStats />
        <ReviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <BusinessSettings />
              <ReviewsList />
            </div>
          </div>
          <div>
            <QRCodeSection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};