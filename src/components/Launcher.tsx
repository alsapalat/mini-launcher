import { useState } from 'react';
import { MINI_APPS, type Category } from '../constants/miniApps';
import { Header } from './Header';
import { AdSlider } from './AdSlider';
import { CategoryFilter } from './CategoryFilter';
import { AppGrid } from './AppGrid';

export function Launcher() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredApps =
    selectedCategory === 'all'
      ? MINI_APPS
      : MINI_APPS.filter((app) => app.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AdSlider />
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <AppGrid apps={filteredApps} />
    </div>
  );
}
