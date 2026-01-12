import { Link } from 'react-router';
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
} from 'react-icons/md';
import type { MiniApp, IconType } from '../constants/miniApps';

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

interface AppCardProps {
  app: MiniApp;
}

export function AppCard({ app }: AppCardProps) {
  const Icon = iconMap[app.icon];

  return (
    <Link
      to={`/apps/${app.id}`}
      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200"
    >
      <div
        className="w-14 h-14 mb-3 rounded-xl flex items-center justify-center shadow-md"
        style={{
          background: `linear-gradient(135deg, ${app.color} 0%, ${app.color}dd 100%)`,
        }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <span className="text-sm font-semibold text-gray-800 text-center">
        {app.name}
      </span>
      <span
        className="text-xs font-medium capitalize mt-1 px-2 py-0.5 rounded-full"
        style={{
          backgroundColor: `${app.color}15`,
          color: app.color,
        }}
      >
        {app.category}
      </span>
    </Link>
  );
}
