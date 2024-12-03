import React from 'react';

export const ThankYou = () => {
  return (
    <div className="min-h-screen min-h-[-webkit-fill-available] bg-white flex items-center justify-center p-4 safe-area-inset-bottom">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">🙏</div>
        <h2 className="text-2xl font-bold mb-4">
          Thank You!
        </h2>
        <p className="text-gray-600 text-lg">
          We appreciate your feedback and will use it to improve our service.
        </p>
      </div>
    </div>
  );
};