'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />

      <div className={`${isSidebarCollapsed ? 'xl:ml-[96px]' : 'xl:ml-[272px]'} w-full transition-margin duration-300`}>
        <div className="sm:p-6 p-3 flex flex-col justify-between w-full min-h-svh">
          <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
          <main className="flex-1 sm:mt-6 mt-3 bg-card overflow-y-auto">
            {/* Use the components here and remove main tag bg color (^) */}
            <div className="p-5">Content here...</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
