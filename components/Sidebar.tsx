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
        <div className={`${isSidebarCollapsed ? 'xl:w-[72px]' : 'xl:w-[248px]'} h-full border-r rounded-md overflow-hidden flex flex-col bg-white transition-width duration-300`}>
          <div className="p-4 border-b">Logo</div>
          <div className="h-full flex-1 overflow-y-auto">fgsf</div>
        </div>
      </aside>
      
      {/* Sidebar at LG and Small device */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="p-4 border-b">Logo</div>
          <div className="h-full flex-1 overflow-y-auto">Sidebar Content</div>
        </SheetContent>
      </Sheet>
    </>
  );
}
