import { useRef, useState, useEffect } from 'react';
import { MdLocalOffer, MdArrowForward } from 'react-icons/md';
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
            className="flex-shrink-0 w-[85%] snap-start rounded-2xl overflow-hidden shadow-lg"
            style={{ background: ad.gradient }}
          >
            <div className="flex items-center justify-between p-5 h-36">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white drop-shadow-sm">
                  {ad.title}
                </h3>
                {ad.subtitle && (
                  <p className="text-sm text-white/80 mt-1">{ad.subtitle}</p>
                )}
                <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors">
                  Learn More
                  <MdArrowForward className="w-4 h-4" />
                </button>
              </div>
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl"
                style={{ backgroundColor: ad.iconBg }}
              >
                <MdLocalOffer className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {ADS.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-6'
                : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
