'use client';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { PiGearDuotone, PiPhoneDuotone } from 'react-icons/pi';
import SiteSettings from './site-settings';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [onHoverSidebarCollapsed, setOnHoverSidebarCollapsed] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { label: 'Label' },
    {
      navItem: 'Dashboard',
      icon: <PiGearDuotone className="!size-5" />,
      child: [
        { title: 'Dropdown item', href: '#' },
        { title: 'Dropdown item', href: '#' },
        { title: 'Dropdown item', href: '#' },
      ],
    },
    {
      navItem: 'Mails',
      icon: <PiPhoneDuotone className="!size-5" />,
      href: '#',
    },
    { label: 'Label' },
    {
      navItem: 'Settings',
      icon: <PiGearDuotone className="!size-5" />,
      child: [
        { title: 'Dropdown item', href: '#' },
        { title: 'Dropdown item', href: '#' },
        { title: 'Dropdown item', href: '#' },
      ],
    },
  ];

  return (
    <div className="flex">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} onHoverSidebarCollapsed={onHoverSidebarCollapsed} setOnHoverSidebarCollapsed={setOnHoverSidebarCollapsed} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} navLinks={navLinks} />

      <div className={`${isSidebarCollapsed ? 'xl:ml-[96px]' : 'xl:ml-[272px]'} w-full transition-margin duration-300`}>
        <div className="flex flex-col justify-between w-full min-h-svh">
          <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
          <main className="flex-1 sm:mt-6 mt-3 overflow-y-auto sm:px-6 px-3">{children}</main>
          <Footer />
        </div>
      </div>

      <SiteSettings />
    </div>
  );
}
