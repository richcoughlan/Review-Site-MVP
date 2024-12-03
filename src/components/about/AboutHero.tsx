import React from 'react';
import { Star } from 'lucide-react';

export const AboutHero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center gap-4 text-blue-600 mb-6">
            <Star className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ReviewBoost Pro
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help businesses build their online reputation through automated review management, 
            customer feedback analysis, and actionable insights. Our platform makes it easy to 
            collect, monitor, and respond to customer reviews across multiple locations.
          </p>
        </div>
      </div>
    </div>
  );
};