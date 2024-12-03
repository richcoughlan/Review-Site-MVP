import { create } from 'zustand';
import { Business, Review } from '../types';
import { subscribeToBusinesses, subscribeToReviews } from '../lib/db';

interface BusinessState {
  businesses: Business[];
  reviews: Review[];
  loading: boolean;
  setBusinesses: (businesses: Business[]) => void;
  setReviews: (reviews: Review[]) => void;
  loadBusinessData: (userId: string) => void;
  addBusiness: (business: Business) => void;
  addReview: (review: Review) => void;
  updateReview: (reviewId: string, updates: Partial<Review>) => void;
  cleanup: () => void;
}

export const useBusinessStore = create<BusinessState>((set) => {
  let businessesUnsubscribe: (() => void) | null = null;
  let reviewsUnsubscribe: (() => void) | null = null;

  return {
    businesses: [],
    reviews: [],
    loading: false,
    setBusinesses: (businesses) => set({ businesses }),
    setReviews: (reviews) => set({ reviews }),
    loadBusinessData: (userId: string) => {
      set({ loading: true });

      // Cleanup existing subscriptions
      if (businessesUnsubscribe) businessesUnsubscribe();
      if (reviewsUnsubscribe) reviewsUnsubscribe();

      // Subscribe to businesses
      businessesUnsubscribe = subscribeToBusinesses(userId, (businesses) => {
        set({ businesses });
        
        // If we have businesses, subscribe to their reviews
        if (businesses.length > 0) {
          if (reviewsUnsubscribe) reviewsUnsubscribe();
          reviewsUnsubscribe = subscribeToReviews(businesses[0].id, (reviews) => {
            set({ reviews });
          });
        }
        
        set({ loading: false });
      });
    },
    addBusiness: (business) => set((state) => ({ 
      businesses: [...state.businesses, business] 
    })),
    addReview: (review) => set((state) => ({ 
      reviews: [...state.reviews, review] 
    })),
    updateReview: (reviewId, updates) => set((state) => ({
      reviews: state.reviews.map(review =>
        review.id === reviewId ? { ...review, ...updates } : review
      )
    })),
    cleanup: () => {
      if (businessesUnsubscribe) businessesUnsubscribe();
      if (reviewsUnsubscribe) reviewsUnsubscribe();
      set({ businesses: [], reviews: [], loading: false });
    }
  };
});