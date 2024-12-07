import useSettingsStore from '@/stores/settingsStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

interface NavLink {
  label?: string;
  navItem?: string;
  href?: string;
  icon?: React.ReactNode;
  title?: string;
  child?: NavLink[];
}

interface SidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  onHoverSidebarCollapsed: boolean;
  setOnHoverSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavLink[];
}

export default function Sidebar({ isSidebarCollapsed, setIsSidebarCollapsed, onHoverSidebarCollapsed, setOnHoverSidebarCollapsed, isSheetOpen, setIsSheetOpen, navLinks }: SidebarProps) {
  const currentPath = usePathname();
  const [openDropdownsHistory, setOpenDropdownsHistory] = useState<number[]>([]);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const allowMultipleDropdowns = useSettingsStore((state) => state.allowMultipleDropdowns);

  // Close sheet on route change
  useEffect(() => {
    setIsSheetOpen(false);
  }, [currentPath, setIsSheetOpen]);

  // Toggle Dropdown
  const toggleDropdown = (index: number) => {
    if (!isSidebarCollapsed) {
      if (allowMultipleDropdowns) {
        setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
        setOpenDropdownsHistory((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
      } else {
        setOpenDropdowns((prev) => (prev.includes(index) ? [] : [index]));
        setOpenDropdownsHistory((prev) => (prev.includes(index) ? [] : [index]));
      }
    }
  };

  // Make openDropdowns array empty/fill
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1280) {
      if (!isSheetOpen) {
        if (openDropdowns?.length > 0 || openDropdownsHistory?.length > 0) {
          setOpenDropdowns([]);
          setOpenDropdownsHistory([]);
        }
      }
    } else if (isSidebarCollapsed) {
      setOpenDropdowns([]);
    } else {
      setOpenDropdowns(openDropdownsHistory);
    }
  }, [isSidebarCollapsed, openDropdownsHistory, isSheetOpen, openDropdowns]);

  // Manage Dropdown Height
  useEffect(() => {
    openDropdowns.forEach((index) => {
      const ref = dropdownRefs.current[index];
      if (ref) {
        ref.style.maxHeight = `${ref.scrollHeight}px`;
      }
    });

    dropdownRefs.current.forEach((ref, index) => {
      if (!openDropdowns.includes(index) && ref) {
        ref.style.maxHeight = '0px';
      }
    });
  }, [openDropdowns]);

  return (
    <>
      {/* Sidebar at XL device */}
      <aside
        className="xl:block hidden fixed top-0 bottom-0 sm:py-6 py-3 sm:pl-6 pl-3"
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
            {navLinks.map((item, index) => {
              return (
                <div key={index} className="space-y-1">
                  {/* label */}
                  {item?.label && !item?.navItem && <>{!isSidebarCollapsed && <h4 className="text-default-900 font-semibold uppercase mb-3 sm:mt-4 mt-3 text-xs">{item?.label}</h4>}</>}

                  {/* Nav links */}
                  {!item?.child && item?.navItem && (
                    <Link href={`${item?.href}`} className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white">
                      <span className={`flex-grow-0 ${isSidebarCollapsed && 'w-full flex justify-center'}`}>{item.icon}</span>
                      {!isSidebarCollapsed && <div className="flex-grow">{item?.navItem}</div>}
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {item?.child && (
                    <div key={index}>
                      <div onClick={() => toggleDropdown(index)} className={`flex ${isSidebarCollapsed ? 'justify-center' : 'justify-between'} items-center text-sm font-medium capitalize px-[10px] py-3 rounded cursor-pointer text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white ${openDropdowns.includes(index) && !isSidebarCollapsed && 'bg-primary text-white dark:text-[#0f172a]'}`}>
                        <div className="flex items-center gap-3">
                          <span className={`flex-grow-0 ${isSidebarCollapsed && 'w-full flex justify-center'}`}>{item.icon}</span>
                          {!isSidebarCollapsed && <div className="flex-grow">{item.navItem}</div>}
                        </div>
                        {!isSidebarCollapsed && (
                          <span>
                            <svg className={`size-5 transition-all duration-300 ${openDropdowns.includes(index) && 'rotate-90'}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 20 20">
                              <path fill="currentColor" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"></path>
                            </svg>
                          </span>
                        )}
                      </div>
                      <div
                        ref={(el) => {
                          dropdownRefs.current[index] = el;
                        }}
                        className="ml-4 pb-0 border-l-2 border-default overflow-hidden transition-all duration-300 ease-in-out transition-max-height"
                        style={{ maxHeight: '0px' }}
                      >
                        {item?.child?.map((child, childIndex) => (
                          <Link key={childIndex} href={`${child?.href}`} className="flex items-center gap-3 text-sm font-medium capitalize px-3 py-2 rounded text-[#334155] dark:text-[#cbd5e1] hover:!text-primary">
                            <div className="flex-grow">{child.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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

          <div className="py-4 border-b border-default">Logo</div>

          {/* Nav Links */}
          <div className="h-full flex-1 overflow-y-auto space-y-1">
            {navLinks.map((item, index) => {
              return (
                <div key={index} className="space-y-1">
                  {/* label */}
                  {item?.label && !item?.navItem && <h4 className="text-default-900 font-semibold uppercase mb-3 sm:mt-4 mt-3 text-xs">{item?.label}</h4>}

                  {/* Nav links */}
                  {!item?.child && item?.navItem && (
                    <Link href={`${item?.href}`} className="flex items-center gap-3 text-sm font-medium capitalize px-[10px] py-3 rounded text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white">
                      <span className="flex-grow-0">{item.icon}</span>
                      <div className="flex-grow">{item?.navItem}</div>
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {item?.child && (
                    <div key={index}>
                      {/* Dropdown Button */}
                      <div onClick={() => toggleDropdown(index)} className={`flex justify-between items-center text-sm font-medium capitalize px-[10px] py-3 rounded cursor-pointer text-[#334155] dark:text-[#cbd5e1] hover:bg-primary hover:text-white ${openDropdowns.includes(index) && 'bg-primary text-white dark:text-[#0f172a]'}`}>
                        <div className="flex items-center gap-3">
                          <span className="flex-grow-0">{item.icon}</span>
                          <div className="flex-grow">{item.navItem}</div>
                        </div>
                        <span>
                          <svg className={`size-5 transition-all duration-300 ${openDropdowns.includes(index) && 'rotate-90'}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"></path>
                          </svg>
                        </span>
                      </div>
                      {/* Dropdown content */}
                      <div
                        ref={(el) => {
                          dropdownRefs.current[index] = el;
                        }}
                        className="ml-4 pb-0 border-l-2 border-default overflow-hidden transition-all duration-300 ease-in-out transition-max-height"
                        style={{ maxHeight: '0px' }}
                      >
                        {item?.child?.map((child, childIndex) => (
                          <Link key={childIndex} href={`${child?.href}`} className="flex items-center gap-3 text-sm font-medium capitalize px-3 py-2 rounded text-[#334155] dark:text-[#cbd5e1] hover:!text-primary">
                            <div className="flex-grow">{child?.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
