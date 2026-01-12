import { Link } from 'react-router';
import type { MiniApp } from '../constants/miniApps';

interface AppCardProps {
  app: MiniApp;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
    >
      <div className="w-14 h-14 mb-3 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={app.logo}
          alt={app.name}
          className="w-8 h-8 object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-900 text-center">
        {app.name}
      </span>
      <span className="text-xs text-gray-500 capitalize mt-1">
        {app.category}
      </span>
    </Link>
  );
}
