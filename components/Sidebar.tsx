import Link from 'next/link';
import { PiGearDuotone, PiPhoneDuotone } from 'react-icons/pi';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

interface SidebarProps {
  isSidebarCollapsed: boolean;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSidebarCollapsed, isSheetOpen, setIsSheetOpen }: SidebarProps) {
  const navLinks = [
    { label: 'Label 1' },
    {
      navItem: 'Dashboard',
      icon: '',
      child: [
        {
          title: 'Dropdown item 1',
          href: '/link',
        },
        {
          title: 'Dropdown item 2',
          href: '/link',
        },
        {
          title: 'Dropdown item 3',
          href: '/link',
        },
      ],
    },
    {
      navItem: 'Mails',
      icon: '',
      href: '/link',
    },
    {
      navItem: 'Contacts',
      icon: '',
      href: '/link',
    },
    { label: 'Label 2' },
    {
      navItem: 'Peoples',
      icon: '',
      href: '/link',
    },
    {
      navItem: 'Settings',
      icon: '',
      child: [
        {
          title: 'Dropdown item 1',
          href: '/link',
        },
        {
          title: 'Dropdown item 2',
          href: '/link',
        },
        {
          title: 'Dropdown item 3',
          href: '/link',
        },
      ],
    },
  ];
  return (
    <>
      {/* Sidebar at XL device */}
      <aside className={`xl:block hidden fixed top-0 bottom-0 sm:p-6 p-3`}>
        <div className={`${isSidebarCollapsed ? 'xl:w-[72px]' : 'xl:w-[248px]'} h-full border-r border-default rounded-md overflow-hidden flex flex-col bg-card transition-width duration-300`}>
          {/* Logo */}
          <div className="p-4 border-b border-default">
            <div className={`${isSidebarCollapsed ? 'block' : 'hidden'}`}>Fav</div>
            <div className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>Logo</div>
          </div>
          {/* Nav Links */}
          <div className="h-full flex-1 overflow-y-auto sm:px-4 px-3 space-y-1">
            {/* label */}
            <h4 className="text-default-900 font-semibold uppercase mb-3 sm:mt-4 mt-3 text-xs">Menu</h4>

            <Link href="#" className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded cursor-pointer text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white dark:hover:text-[#0f172a]">
              <PiPhoneDuotone className="!size-5" />
              Contacts
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded cursor-pointer text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white dark:hover:text-[#0f172a]">
              <PiGearDuotone className="!size-5" />
              Settings
            </Link>
          </div>
        </div>
      </aside>

      {/* Sidebar at LG and Small device */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left" className="border-default">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="py-4 border-b border-default">Dashboard</div>
          <div className="h-full flex-1 overflow-y-auto">Sidebar Content</div>
        </SheetContent>
      </Sheet>
    </>
  );
}
