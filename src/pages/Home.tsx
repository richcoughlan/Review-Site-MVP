import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, QrCode, BarChart2, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar';
import { PricingSection } from '../components/pricing/PricingSection';
import { DecorativeBackground } from '../components/ui/DecorativeBackground';
import { useAuthStore } from '../store/authStore';

export const Home = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section with Modern Graphics */}
      <div className="relative isolate overflow-hidden">
        <DecorativeBackground variant="mixed" className="opacity-[0.03]" />
        
        {/* Decorative background elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="flex items-center gap-x-4">
              <Star className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ReviewBoost Pro
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your customer feedback into business growth. Our smart review management platform helps you collect, monitor, and leverage customer reviews to build a stronger online presence.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/learn-more" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Modern Graphic Element */}
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
            <div className="relative">
              {/* Main circle */}
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-600/10 animate-pulse" />
              <div className="absolute -right-4 -bottom-4 h-72 w-72 rounded-full bg-purple-600/10 animate-pulse [animation-delay:1s]" />
              
              {/* Content cards */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-32" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded w-full" />
                  <div className="h-2 bg-gray-200 rounded w-5/6" />
                  <div className="h-2 bg-gray-200 rounded w-4/6" />
                </div>
              </div>

              <div className="relative mt-6 ml-12 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-600/10 flex items-center justify-center">
                    <QrCode className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-32" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded w-full" />
                  <div className="h-2 bg-gray-200 rounded w-5/6" />
                  <div className="h-2 bg-gray-200 rounded w-4/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <DecorativeBackground variant="qr" className="opacity-[0.02]" />
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Grow Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your online reputation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools helps you collect and manage customer reviews, analyze feedback, and build a stronger online presence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <QrCode className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Smart QR Codes</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Generate custom QR codes for each location to easily collect customer reviews and feedback.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Analytics Dashboard</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Track review trends and monitor customer sentiment across all your locations.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Feedback Management</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Efficiently manage and respond to customer feedback in one centralized platform.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative">
        <DecorativeBackground variant="charts" className="opacity-[0.02]" />
        <PricingSection />
      </div>

      {/* CTA Section */}
      <div className="relative bg-blue-600">
        <DecorativeBackground variant="mixed" className="opacity-[0.03] mix-blend-overlay" />
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to boost your online reputation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of businesses using ReviewBoost Pro to build trust and grow their customer base.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={handleGetStarted}>
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};