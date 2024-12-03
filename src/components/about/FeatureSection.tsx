import React from 'react';
import { QrCode, BarChart2, MessageSquare, Star } from 'lucide-react';

const features = [
  {
    name: 'QR Code Generation',
    description: 'Generate custom QR codes for each business location to easily collect customer reviews.',
    icon: QrCode,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Track review trends, customer sentiment, and performance metrics across all locations.',
    icon: BarChart2,
  },
  {
    name: 'Feedback Management',
    description: 'Efficiently manage and respond to customer feedback in one centralized platform.',
    icon: MessageSquare,
  },
  {
    name: 'Reputation Building',
    description: 'Build and maintain a strong online presence through proactive review management.',
    icon: Star,
  },
];

export const FeatureSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your online reputation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools helps you stay on top of customer feedback
            and maintain a stellar online presence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};