import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

const tiers = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for small businesses with a single location.',
    features: [
      'Up to 1 location',
      'Custom QR codes',
      'Basic analytics',
      'Email support',
      'Review monitoring',
    ],
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses with multiple locations.',
    features: [
      'Up to 5 locations',
      'Custom QR codes',
      'Advanced analytics',
      'Priority email support',
      'Review monitoring',
      'Customer feedback management',
      'Custom branding',
      'Weekly reports',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large businesses with complex needs.',
    features: [
      'Unlimited locations',
      'Custom QR codes',
      'Advanced analytics',
      '24/7 phone support',
      'Review monitoring',
      'Customer feedback management',
      'Custom branding',
      'Real-time reporting',
      'API access',
      'Dedicated account manager',
    ],
  },
];

export const PricingSection = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl ${
                tier.featured
                  ? 'bg-gray-900 ring-2 ring-blue-600'
                  : 'bg-white ring-1 ring-gray-200'
              } p-8 xl:p-10`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.featured ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm leading-6 ${
                    tier.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={`h-6 w-5 flex-none ${
                          tier.featured ? 'text-blue-400' : 'text-blue-600'
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/auth" className="mt-8">
                <Button
                  variant={tier.featured ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  Get started today
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};