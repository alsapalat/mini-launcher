export type IconType =
  | 'food'
  | 'market'
  | 'restaurant'
  | 'taxi'
  | 'flight'
  | 'hotel'
  | 'send'
  | 'receipt'
  | 'bank'
  | 'movie'
  | 'gaming'
  | 'ticket';

export type AppCategory =
  | 'food'
  | 'market'
  | 'restaurant'
  | 'transport'
  | 'finance'
  | 'entertainment';

export interface MiniApp {
  id: string;
  name: string;
  icon: IconType;
  category: AppCategory;
  entry_url: string;
  description?: string;
  color: string;
}

export const MINI_APPS: MiniApp[] = [
  // Food & Dining
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    icon: 'food',
    category: 'food',
    entry_url: '/apps/food-delivery',
    description: 'Order food from your favorite restaurants',
    color: '#f97316',
  },
  {
    id: 'grocery-market',
    name: 'Market',
    icon: 'market',
    category: 'market',
    entry_url: '/apps/grocery-market',
    description: 'Order groceries and essentials',
    color: '#10b981',
  },
  {
    id: 'dine-in',
    name: 'Dine In',
    icon: 'restaurant',
    category: 'restaurant',
    entry_url: '/apps/dine-in',
    description: 'Order at your table',
    color: '#8b5cf6',
  },

  // Transport & Travel
  {
    id: 'ride',
    name: 'Ride',
    icon: 'taxi',
    category: 'transport',
    entry_url: '/apps/ride',
    description: 'Book rides and carpools',
    color: '#0891b2',
  },
  {
    id: 'flights',
    name: 'Flights',
    icon: 'flight',
    category: 'transport',
    entry_url: '/apps/flights',
    description: 'Search and book flights',
    color: '#0891b2',
  },
  {
    id: 'hotels',
    name: 'Hotels',
    icon: 'hotel',
    category: 'transport',
    entry_url: '/apps/hotels',
    description: 'Find and reserve hotels',
    color: '#0891b2',
  },

  // Finance & Remittance
  {
    id: 'send-money',
    name: 'Send Money',
    icon: 'send',
    category: 'finance',
    entry_url: '/apps/send-money',
    description: 'Transfer money instantly',
    color: '#059669',
  },
  {
    id: 'pay-bills',
    name: 'Pay Bills',
    icon: 'receipt',
    category: 'finance',
    entry_url: '/apps/pay-bills',
    description: 'Pay utilities and bills',
    color: '#059669',
  },
  {
    id: 'loans',
    name: 'Loans',
    icon: 'bank',
    category: 'finance',
    entry_url: '/apps/loans',
    description: 'Apply for quick loans',
    color: '#059669',
  },

  // Entertainment & Gaming
  {
    id: 'movies',
    name: 'Movies',
    icon: 'movie',
    category: 'entertainment',
    entry_url: '/apps/movies',
    description: 'Book movie tickets',
    color: '#e11d48',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: 'gaming',
    category: 'entertainment',
    entry_url: '/apps/gaming',
    description: 'Buy game credits',
    color: '#e11d48',
  },
  {
    id: 'events',
    name: 'Events',
    icon: 'ticket',
    category: 'entertainment',
    entry_url: '/apps/events',
    description: 'Get event tickets',
    color: '#e11d48',
  },
];

export const CATEGORIES = [
  'all',
  'food',
  'market',
  'restaurant',
  'transport',
  'finance',
  'entertainment',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<Category, string> = {
  all: '#6366f1',
  food: '#f97316',
  market: '#10b981',
  restaurant: '#8b5cf6',
  transport: '#0891b2',
  finance: '#059669',
  entertainment: '#e11d48',
};
