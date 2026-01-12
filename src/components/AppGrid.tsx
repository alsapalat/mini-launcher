import type { MiniApp } from '../constants/miniApps';
import { AppCard } from './AppCard';

interface AppGridProps {
  apps: MiniApp[];
}

export function AppGrid({ apps }: AppGridProps) {
  if (apps.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">
        No apps found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 px-4 py-4">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
