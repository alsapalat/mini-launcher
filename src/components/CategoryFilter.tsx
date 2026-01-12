import { CATEGORIES, type Category } from '../constants/miniApps';

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            selected === category
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
