import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

interface SidebarProps {
  isSidebarCollapsed: boolean;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSidebarCollapsed, isSheetOpen, setIsSheetOpen }: SidebarProps) {
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
          <div className="h-full flex-1 overflow-y-auto sm:p-4 p-3">
            <p className="h-44 bg-gray-700">a</p>
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
