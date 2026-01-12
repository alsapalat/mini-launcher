import { MdApps } from 'react-icons/md';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
          <MdApps className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mini Apps
          </h1>
          <p className="text-xs text-gray-500">Discover & Launch</p>
        </div>
      </div>
    </header>
  );
}
