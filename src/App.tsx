import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthLayout } from './components/auth/AuthLayout';
import { AuthGuard } from './components/auth/AuthGuard';
import { AuthForm } from './components/auth/AuthForm';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { LearnMore } from './pages/LearnMore';
import { ReviewFlow } from './pages/ReviewFlow';
import { Feedback } from './pages/Feedback';
import { ThankYou } from './pages/ThankYou';
import { initializeAuth } from './lib/auth';
import { useAuthStore } from './store/authStore';

export function App() {
  const { loading, user } = useAuthStore();
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    const cleanup = initializeAuth();
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={
          <AuthGuard requireAuth={false}>
            <AuthLayout 
              title="ReviewBoost Pro" 
              subtitle={authMode === 'signin' 
                ? 'Sign in to your account'
                : 'Create your business account'}
            >
              <AuthForm 
                mode={authMode}
                onToggleMode={() => setAuthMode(mode => 
                  mode === 'signin' ? 'signup' : 'signin'
                )}
              />
            </AuthLayout>
          </AuthGuard>
        } />
        <Route path="/dashboard" element={
          user ? (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ) : (
            <Navigate to="/auth" replace />
          )
        } />
        <Route path="/about" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
        {/* Public routes - no auth required */}
        <Route path="/review" element={<ReviewFlow />} />
        <Route path="/review/feedback" element={<Feedback />} />
        <Route path="/review/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}