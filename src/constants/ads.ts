export interface AdBanner {
  id: string;
  title: string;
  subtitle?: string;
  linkUrl?: string;
  gradient: string;
  iconBg: string;
}

export const ADS: AdBanner[] = [
  {
    id: 'promo-1',
    title: 'Free Delivery',
    subtitle: 'On your first order',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    iconBg: 'rgba(255,255,255,0.2)',
  },
  {
    id: 'promo-2',
    title: '50% Off Groceries',
    subtitle: 'This weekend only',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    iconBg: 'rgba(255,255,255,0.2)',
  },
  {
    id: 'promo-3',
    title: 'Dine & Save',
    subtitle: 'Cashback on all orders',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    iconBg: 'rgba(255,255,255,0.2)',
  },
];
