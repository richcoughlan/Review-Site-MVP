import { User, Business, Review } from '../types';

// Generate 30 days of mock review data with a clear upward trend
const generateMockReviews = () => {
  const reviews: Review[] = [];
  const today = new Date();
  
  // Generate one month of data
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Calculate positive reviews with a clear upward trend
    // Start with 2-3 reviews and increase to 12-15 reviews
    const progress = (30 - i) / 30; // 0 to 1
    const basePositive = Math.floor(2 + (10 * progress)); // Base count increases from 2 to 12
    const randomVariation = Math.floor(Math.random() * 3); // Add 0-2 random reviews
    const positiveCount = basePositive + randomVariation;
    
    // Generate increasing positive reviews
    for (let j = 0; j < positiveCount; j++) {
      reviews.push({
        id: `pos_${i}_${j}`,
        businessId: '1',
        locationId: ['1', '2', '3'][Math.floor(Math.random() * 3)],
        type: 'positive',
        customerEmail: `customer${i}${j}@example.com`,
        createdAt: new Date(date),
        mailingListOptIn: Math.random() > 0.5,
        discountCodeSent: Math.random() > 0.7
      });
    }
    
    // Generate consistently low negative reviews (0-2 per day)
    const negativeCount = Math.floor(Math.random() * 2);
    
    for (let j = 0; j < negativeCount; j++) {
      reviews.push({
        id: `neg_${i}_${j}`,
        businessId: '1',
        locationId: ['1', '2', '3'][Math.floor(Math.random() * 3)],
        type: 'negative',
        feedback: 'Some areas could be improved',
        customerEmail: `feedback${i}${j}@example.com`,
        createdAt: new Date(date),
        mailingListOptIn: Math.random() > 0.5
      });
    }
  }
  
  return reviews;
};

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Pain Medicine Consultants',
    role: 'business'
  }
];

// Mock Businesses
export const mockBusinesses: Business[] = [
  {
    id: '1',
    ownerId: '1',
    name: 'Pain Medicine Consultants',
    subscription: 'professional',
    locations: [
      {
        id: '1',
        businessId: '1',
        name: 'Pleasant Hill',
        address: '123 Medical Plaza Dr, Pleasant Hill, CA',
        googlePlaceId: 'CfHqk_iebfcjEAE',
        reviewLink: 'https://g.page/r/CfHqk_iebfcjEAE/review',
        qrCode: `${window.location.origin}/review?businessId=1&locationId=1&reviewLink=${encodeURIComponent('https://g.page/r/CfHqk_iebfcjEAE/review')}`
      },
      {
        id: '2',
        businessId: '1',
        name: 'Walnut Creek',
        address: '456 Oak Grove Rd, Walnut Creek, CA',
        googlePlaceId: 'sample_id_2',
        reviewLink: 'https://g.page/r/sample_id_2/review',
        qrCode: `${window.location.origin}/review?businessId=1&locationId=2&reviewLink=${encodeURIComponent('https://g.page/r/sample_id_2/review')}`
      },
      {
        id: '3',
        businessId: '1',
        name: 'Concord',
        address: '789 Willow Pass Rd, Concord, CA',
        googlePlaceId: 'sample_id_3',
        reviewLink: 'https://g.page/r/sample_id_3/review',
        qrCode: `${window.location.origin}/review?businessId=1&locationId=3&reviewLink=${encodeURIComponent('https://g.page/r/sample_id_3/review')}`
      }
    ]
  }
];

// Generate mock reviews
export const mockReviews = generateMockReviews();