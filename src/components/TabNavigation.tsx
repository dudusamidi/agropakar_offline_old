import React from 'react';
import { 
  Stethoscope, 
  BookOpen, 
  CloudSun, 
  MessageSquare, 
  Settings, 
  History 
} from 'lucide-react';
import { UserRole } from '../types';

export type ActiveTab = 'diagnose' | 'catalog' | 'weather' | 'forum' | 'admin' | 'history';

interface TabNavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userRole: UserRole;
  queueCount: number;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  queueCount
}) => {
  const tabs = [
    {
      id: 'diagnose' as ActiveTab,
      label: 'Diagnosa',
      icon: Stethoscope,
      badge: queueCount > 0 ? `${queueCount}` : undefined
    },
    {
      id: 'catalog' as ActiveTab,
      label: 'Katalog',
      icon: BookOpen
    },
    {
      id: 'weather' as ActiveTab,
      label: 'Cuaca',
      icon: CloudSun
    },
    {
      id: 'forum' as ActiveTab,
      label: 'Forum',
      icon: MessageSquare
    },
    {
      id: userRole === 'admin' ? ('admin' as ActiveTab) : ('history' as ActiveTab),
      label: userRole === 'admin' ? 'Kelola' : 'Riwayat',
      icon: userRole === 'admin' ? Settings : History
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-xl md:static md:border-t-0 md:bg-transparent md:shadow-none">
      <div className="max-w-lg mx-auto md:max-w-none px-2 py-1.5 md:py-0">
        <div className="grid grid-cols-5 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50/90 font-bold md:bg-emerald-600 md:text-white'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                  {tab.badge && (
                    <span className="absolute -top-1.5 -right-2 bg-amber-500 text-stone-900 font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] mt-1 tracking-tight leading-none truncate max-w-full">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
