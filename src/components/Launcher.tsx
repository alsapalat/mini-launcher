import { useState } from 'react';
import { MINI_APPS, type Category } from '../constants/miniApps';
import { Header } from './Header';
import { AdSlider } from './AdSlider';
import { CategoryFilter } from './CategoryFilter';
import { AppGrid } from './AppGrid';

const DebugLogs = () => {
  const [show, setShow] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsInJson = Object.fromEntries(queryParams.entries());
  if (!show) {
    return (
      <div className="z-50 fixed bottom-0 left-0 w-full bg-black/40 text-white text-xs p-1 font-mono font-light overflow-auto">
        <button className="text-underline w-full text-center" onClick={() => setShow(true)}>Show Debug Logs</button>
      </div>
    )
  }
  return (
    <div className="z-50 fixed bottom-0 left-0 w-full h-40 bg-black/40 text-white text-xs p-1 font-mono font-light overflow-auto">
      <div>
        <div>JSAPI: {typeof my !== 'undefined' ? 'YES' : 'NO'}</div>
      </div>
      <div>Params:</div>
      <div>
        <pre>{JSON.stringify(queryParamsInJson, null, 2)}</pre>
      </div>
    </div>
  )
}

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
      <DebugLogs />
    </div>
  );
}
