import { useRef, useState, useEffect } from 'react';
import { ADS } from '../constants/ads';

export function AdSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="py-4">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ADS.map((ad) => (
          <div
            key={ad.id}
            className="flex-shrink-0 w-[85%] snap-start rounded-xl overflow-hidden"
            style={{ backgroundColor: ad.bgColor }}
          >
            <div className="flex items-center justify-between p-4 h-32">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {ad.title}
                </h3>
                {ad.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{ad.subtitle}</p>
                )}
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={ad.imageUrl}
                  alt={ad.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {ADS.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
