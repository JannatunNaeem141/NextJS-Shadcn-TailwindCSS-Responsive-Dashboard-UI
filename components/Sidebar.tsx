// import * as Tooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';
import { PiPhoneDuotone } from 'react-icons/pi';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

interface SidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  onHoverSidebarCollapsed: boolean;
  setOnHoverSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSidebarCollapsed, setIsSidebarCollapsed, onHoverSidebarCollapsed, setOnHoverSidebarCollapsed, isSheetOpen, setIsSheetOpen }: SidebarProps) {
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
      <aside
        className="xl:block hidden fixed top-0 bottom-0 sm:p-6 p-3"
        onMouseEnter={() => {
          if (isSidebarCollapsed && !onHoverSidebarCollapsed) {
            setIsSidebarCollapsed(false);
            setOnHoverSidebarCollapsed(true);
          }
        }}
        onMouseLeave={() => {
          if (!isSidebarCollapsed && onHoverSidebarCollapsed) {
            setIsSidebarCollapsed(true);
            setOnHoverSidebarCollapsed(false);
          }
        }}
      >
        <div className={`${isSidebarCollapsed ? 'xl:w-[72px]' : 'xl:w-[248px]'} h-full border-r border-default rounded-md overflow-hidden flex flex-col bg-card transition-width duration-300`}>
          {/* Logo */}
          <div className="p-4 border-b border-default">
            <div className={`${isSidebarCollapsed ? 'block' : 'hidden'}`}>Fav</div>
            <div className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>Logo</div>
          </div>
          {/* Nav Links */}
          <div className={`h-full flex-1 overflow-y-auto space-y-1 ${isSidebarCollapsed ? 'px-3 my-3' : 'sm:px-4 px-3'}`}>
            {/* label */}
            {!isSidebarCollapsed && <h4 className="text-default-900 font-semibold uppercase mb-3 sm:mt-4 mt-3 text-xs">Menu</h4>}

            {/* Nav links */}
            {/* <Link href="#">
              {isSidebarCollapsed ? (
                <div>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <span
                          className="size-12 mx-auto rounded-md transition-all duration-300 inline-flex flex-col items-center justify-center relative text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white dark:hover:text-[#0f172a]"
                        >
                          <PiPhoneDuotone className="!size-5" />
                        </span>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          side="right"
                          className="bg-primary text-white select-none rounded-md px-[15px] py-[10px] text-[15px] leading-none shadow-sm"
                          sideOffset={5}
                        >
                          Contacts
                          <Tooltip.Arrow className="fill-primary" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white dark:hover:text-[#0f172a]">
                  <span className="flex-grow-0">
                    <PiPhoneDuotone className="!size-5" />
                  </span>
                  <div className="text-box flex-grow">Contacts</div>
                </div>
              )}
            </Link> */}
            
            <Link href="#" className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded cursor-pointer text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white dark:hover:text-[#0f172a]">
              <span className={`flex-grow-0 ${isSidebarCollapsed && 'w-full flex justify-center'}`}>
                <PiPhoneDuotone className="!size-5" />
              </span>
              {!isSidebarCollapsed && <div className="text-box flex-grow">Contacts</div>}
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
