export interface AdBanner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  linkUrl?: string;
  bgColor: string;
}

export const ADS: AdBanner[] = [
  {
    id: 'promo-1',
    title: 'Free Delivery',
    subtitle: 'On your first order',
    imageUrl: '/ads/promo1.svg',
    bgColor: '#f3f4f6',
  },
  {
    id: 'promo-2',
    title: '50% Off Groceries',
    subtitle: 'This weekend only',
    imageUrl: '/ads/promo2.svg',
    bgColor: '#fef3c7',
  },
  {
    id: 'promo-3',
    title: 'Dine & Save',
    subtitle: 'Cashback on all orders',
    imageUrl: '/ads/promo3.svg',
    bgColor: '#dbeafe',
  },
];
