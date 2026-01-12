export interface MiniApp {
  id: string;
  name: string;
  logo: string;
  category: 'food' | 'market' | 'restaurant';
  entry_url: string;
  description?: string;
}

export const MINI_APPS: MiniApp[] = [
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    logo: '/icons/food.svg',
    category: 'food',
    entry_url: '/apps/food-delivery',
    description: 'Order food from your favorite restaurants',
  },
  {
    id: 'grocery-market',
    name: 'Market',
    logo: '/icons/market.svg',
    category: 'market',
    entry_url: '/apps/grocery-market',
    description: 'Order groceries and essentials',
  },
  {
    id: 'dine-in',
    name: 'Dine In',
    logo: '/icons/restaurant.svg',
    category: 'restaurant',
    entry_url: '/apps/dine-in',
    description: 'Order at your table',
  },
];

export const CATEGORIES = ['all', 'food', 'market', 'restaurant'] as const;
export type Category = (typeof CATEGORIES)[number];
