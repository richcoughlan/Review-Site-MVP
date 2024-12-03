import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { AboutHero } from '../components/about/AboutHero';
import { FeatureSection } from '../components/about/FeatureSection';

export const About = () => {
  return (
    <DashboardLayout>
      <AboutHero />
      <FeatureSection />
    </DashboardLayout>
  );
};