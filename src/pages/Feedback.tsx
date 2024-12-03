import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { createReview } from '../lib/db';

export const Feedback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const businessId = searchParams.get('businessId');
  const locationId = searchParams.get('locationId');

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createReview({
        businessId: businessId || '',
        locationId: locationId || '',
        type: 'negative',
        feedback,
        createdAt: new Date(),
      });
      navigate('/review/thank-you');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          How can we improve?
        </h2>
        <form onSubmit={handleSubmitFeedback} className="space-y-6">
          <textarea
            rows={4}
            className="w-full p-4 text-lg border rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what we could do better..."
            required
          />
          <Button
            type="submit"
            className="w-full h-14 text-lg rounded-xl"
            loading={loading}
          >
            <Send className="h-5 w-5 mr-2" />
            Send Feedback
          </Button>
        </form>
      </div>
    </div>
  );
};