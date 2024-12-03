import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { LearnMoreContent } from '../components/learn-more/LearnMoreContent';
import { DecorativeBackground } from '../components/ui/DecorativeBackground';

export const LearnMore = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white relative">
      <DecorativeBackground variant="mixed" className="opacity-[0.02] fixed" />
      <Navbar />
      <LearnMoreContent />
    </div>
  );
};