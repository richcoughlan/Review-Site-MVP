import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const ReviewFlow = () => {
  const [searchParams] = useSearchParams();
  const reviewLink = searchParams.get('reviewLink');

  const handlePositiveReview = () => {
    if (reviewLink) {
      window.location.href = decodeURIComponent(reviewLink);
    }
  };

  const handleNegativeReview = () => {
    window.location.href = `/review/feedback?${searchParams.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-8">
          How was your experience?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handlePositiveReview}
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 active:bg-green-100 transition-colors"
          >
            <div className="text-6xl mb-4">😊</div>
            <span className="text-lg font-medium">Great!</span>
          </button>
          <button
            onClick={handleNegativeReview}
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 active:bg-orange-100 transition-colors"
          >
            <div className="text-6xl mb-4">😕</div>
            <span className="text-lg font-medium">Not Great</span>
          </button>
        </div>
      </div>
    </div>
  );
};