import React from 'react';
import { Star, TrendingUp, BarChart2, QrCode, MessageSquare, Users } from 'lucide-react';
import { PricingSection } from '../pricing/PricingSection';

const benefits = [
  {
    title: 'Boost Your Online Reputation',
    description: 'Turn happy customers into powerful brand advocates. Our platform makes it easy for satisfied customers to share their positive experiences online.',
    icon: Star,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    title: 'Increase Review Volume',
    description: 'Generate more authentic reviews with our smart QR code system. Make it effortless for customers to leave feedback at the moment of truth.',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Track your review performance across all locations with detailed analytics. Identify trends and make informed decisions to improve customer satisfaction.',
    icon: BarChart2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  }
];

const features = [
  {
    name: 'Smart QR Codes',
    description: 'Generate unique QR codes for each location that direct customers to leave reviews. Track scan rates and conversion analytics.',
    icon: QrCode,
  },
  {
    name: 'Feedback Management',
    description: 'Capture and manage customer feedback in real-time. Address concerns before they become public reviews.',
    icon: MessageSquare,
  },
  {
    name: 'Customer Engagement',
    description: 'Build stronger relationships with automated follow-ups and personalized responses to customer feedback.',
    icon: Users,
  }
];

export const LearnMoreContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Online Reputation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ReviewBoost Pro helps businesses collect, manage, and leverage customer reviews to build trust and drive growth. Our platform makes it easy to turn happy customers into powerful brand advocates.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your online reputation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides everything you need to build and maintain a stellar online reputation.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className={`mb-6 flex h-10 w-10 items-center justify-center rounded-lg ${benefit.bgColor}`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} aria-hidden="true" />
                  </div>
                  {benefit.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every tool you need to manage and improve your online reputation.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                  <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>
    </div>
  );
};