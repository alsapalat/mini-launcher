import { CATEGORIES, CATEGORY_COLORS, type Category } from '../constants/miniApps';

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      {CATEGORIES.map((category) => {
        const isSelected = selected === category;
        const color = CATEGORY_COLORS[category];

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              isSelected
                ? 'text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={
              isSelected
                ? {
                    background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                  }
                : undefined
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
