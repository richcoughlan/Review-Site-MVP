import { ref, get, set, push, update, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
import { db } from './firebase';
import { Business, Location, Review } from '../types';

// Business Operations
export const createBusiness = async (userId: string, business: Omit<Business, 'id'>) => {
  const newBusinessRef = push(ref(db, 'businesses'));
  const businessData = {
    ...business,
    id: newBusinessRef.key,
    createdAt: new Date().toISOString()
  };
  
  await set(newBusinessRef, businessData);
  return businessData;
};

export const getBusinessesByUser = async (userId: string) => {
  const businessesRef = query(
    ref(db, 'businesses'),
    orderByChild('ownerId'),
    equalTo(userId)
  );
  
  const snapshot = await get(businessesRef);
  const businesses: Business[] = [];
  
  snapshot.forEach((child) => {
    businesses.push({ id: child.key!, ...child.val() });
  });
  
  return businesses;
};

export const subscribeToBusinesses = (userId: string, callback: (businesses: Business[]) => void) => {
  const businessesRef = query(
    ref(db, 'businesses'),
    orderByChild('ownerId'),
    equalTo(userId)
  );
  
  const listener = onValue(businessesRef, (snapshot) => {
    const businesses: Business[] = [];
    snapshot.forEach((child) => {
      businesses.push({ id: child.key!, ...child.val() });
    });
    callback(businesses);
  });
  
  return () => off(businessesRef, 'value', listener);
};

// Location Operations
export const updateLocation = async (businessId: string, location: Location) => {
  const updates: { [key: string]: any } = {};
  updates[`businesses/${businessId}/locations/${location.id}`] = location;
  await update(ref(db), updates);
};

export const addLocation = async (businessId: string, location: Omit<Location, 'id'>) => {
  const newLocationRef = push(ref(db, `businesses/${businessId}/locations`));
  const locationData = {
    ...location,
    id: newLocationRef.key
  };
  
  await set(newLocationRef, locationData);
  return locationData;
};

// Review Operations
export const createReview = async (review: Omit<Review, 'id'>) => {
  const newReviewRef = push(ref(db, 'reviews'));
  const reviewData = {
    ...review,
    id: newReviewRef.key,
    createdAt: new Date().toISOString()
  };
  
  await set(newReviewRef, reviewData);
  return reviewData;
};

export const getReviewsByBusiness = async (businessId: string) => {
  const reviewsRef = query(
    ref(db, 'reviews'),
    orderByChild('businessId'),
    equalTo(businessId)
  );
  
  const snapshot = await get(reviewsRef);
  const reviews: Review[] = [];
  
  snapshot.forEach((child) => {
    reviews.push({
      id: child.key!,
      ...child.val(),
      createdAt: new Date(child.val().createdAt)
    });
  });
  
  return reviews;
};

export const subscribeToReviews = (businessId: string, callback: (reviews: Review[]) => void) => {
  const reviewsRef = query(
    ref(db, 'reviews'),
    orderByChild('businessId'),
    equalTo(businessId)
  );
  
  const listener = onValue(reviewsRef, (snapshot) => {
    const reviews: Review[] = [];
    snapshot.forEach((child) => {
      reviews.push({
        id: child.key!,
        ...child.val(),
        createdAt: new Date(child.val().createdAt)
      });
    });
    callback(reviews);
  });
  
  return () => off(reviewsRef, 'value', listener);
};

export const updateReview = async (reviewId: string, data: Partial<Review>) => {
  const updates: { [key: string]: any } = {};
  updates[`reviews/${reviewId}`] = data;
  await update(ref(db), updates);
};