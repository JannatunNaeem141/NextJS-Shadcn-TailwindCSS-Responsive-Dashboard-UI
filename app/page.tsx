'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [onHoverSidebarCollapsed, setOnHoverSidebarCollapsed] = useState(false);
  const [onHoverOpenDropdown, setOnHoverOpenDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // const navLinks = [
  //   { label: 'Label 1' },
  //   {
  //     navItem: 'Dashboard',
  //     icon: '',
  //     child: [
  //       {
  //         title: 'Dropdown item 1',
  //         href: '/link',
  //       },
  //       {
  //         title: 'Dropdown item 2',
  //         href: '/link',
  //       },
  //       {
  //         title: 'Dropdown item 3',
  //         href: '/link',
  //       },
  //     ],
  //   },
  //   {
  //     navItem: 'Mails',
  //     icon: '',
  //     href: '/link',
  //   },
  //   {
  //     navItem: 'Contacts',
  //     icon: '',
  //     href: '/link',
  //   },
  //   { label: 'Label 2' },
  //   {
  //     navItem: 'Peoples',
  //     icon: '',
  //     href: '/link',
  //   },
  //   {
  //     navItem: 'Settings',
  //     icon: '',
  //     child: [
  //       {
  //         title: 'Dropdown item 1',
  //         href: '/link',
  //       },
  //       {
  //         title: 'Dropdown item 2',
  //         href: '/link',
  //       },
  //       {
  //         title: 'Dropdown item 3',
  //         href: '/link',
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="flex">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} onHoverSidebarCollapsed={onHoverSidebarCollapsed} setOnHoverSidebarCollapsed={setOnHoverSidebarCollapsed} onHoverOpenDropdown={onHoverOpenDropdown} setOnHoverOpenDropdown={setOnHoverOpenDropdown} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />

      <div className={`${isSidebarCollapsed ? 'xl:ml-[96px]' : 'xl:ml-[272px]'} w-full transition-margin duration-300`}>
        <div className="flex flex-col justify-between w-full min-h-svh">
          <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} onHoverOpenDropdown={onHoverOpenDropdown} setOpenDropdown={setOpenDropdown} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />

          <main className="flex-1 sm:mt-6 mt-3 overflow-y-auto sm:px-6 px-3">
            {/* Use the components here and remove main tag bg color (^) */}
            <div className="p-5">Content here...</div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
