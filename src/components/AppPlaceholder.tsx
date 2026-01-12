import { Link, useParams } from 'react-router';
import { MINI_APPS } from '../constants/miniApps';

export function AppPlaceholder() {
  const { appId } = useParams<{ appId: string }>();
  const app = MINI_APPS.find((a) => a.id === appId);

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <p className="text-gray-600 mb-4">App not found</p>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3">
        <Link
          to="/"
          className="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">{app.name}</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-20 h-20 mb-6 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
          <img
            src={app.logo}
            alt={app.name}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{app.name}</h2>
        <p className="text-gray-500 text-center mb-6">{app.description}</p>
        <div className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
