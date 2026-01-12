import { Link, useParams } from 'react-router';
import {
  MdDeliveryDining,
  MdStorefront,
  MdRestaurant,
  MdLocalTaxi,
  MdFlight,
  MdHotel,
  MdSend,
  MdReceipt,
  MdAccountBalance,
  MdMovie,
  MdSportsEsports,
  MdConfirmationNumber,
  MdArrowBack,
} from 'react-icons/md';
import { MINI_APPS, type IconType } from '../constants/miniApps';

const iconMap: Record<IconType, React.ComponentType<{ className?: string }>> = {
  food: MdDeliveryDining,
  market: MdStorefront,
  restaurant: MdRestaurant,
  taxi: MdLocalTaxi,
  flight: MdFlight,
  hotel: MdHotel,
  send: MdSend,
  receipt: MdReceipt,
  bank: MdAccountBalance,
  movie: MdMovie,
  gaming: MdSportsEsports,
  ticket: MdConfirmationNumber,
};

export function AppPlaceholder() {
  const { appId } = useParams<{ appId: string }>();
  const app = MINI_APPS.find((a) => a.id === appId);

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <p className="text-gray-600 mb-4">App not found</p>
        <Link
          to="/"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = iconMap[app.icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3">
        <Link
          to="/"
          className="p-2 -ml-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
        >
          <MdArrowBack className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">{app.name}</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div
          className="w-24 h-24 mb-6 rounded-3xl flex items-center justify-center shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${app.color} 0%, ${app.color}cc 100%)`,
          }}
        >
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h2>
        <p className="text-gray-500 text-center mb-6 max-w-xs">{app.description}</p>
        <div
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md"
          style={{
            background: `linear-gradient(135deg, ${app.color} 0%, ${app.color}cc 100%)`,
          }}
        >
          Coming Soon
        </div>
      </div>
    </div>
  );
}
