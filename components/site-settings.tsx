'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useSettingsStore from '@/stores/settingsStore';
import { Settings } from 'lucide-react';
import { Checkbox } from './ui/checkbox';

const SiteSettings = ({
  trigger = (
    <div className="fixed right-4 bottom-[86px] z-50">
      <Button size="icon" className="size-12 rounded-full bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary" title="Settings">
        <Settings className="text-white !size-6 animate-spin" />
      </Button>
    </div>
  ),
}: {
  trigger?: React.ReactNode;
}) => {
  const allowMultipleDropdowns = useSettingsStore((state) => state.allowMultipleDropdowns);
  const setAllowMultipleDropdowns = useSettingsStore((state) => state.setAllowMultipleDropdowns);
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="border-default">
        <SheetHeader className="text-start border-b border-default -mx-6 px-6 pb-4 shadow-sm md:shadow-none">
          <SheetTitle className="text-base font-medium">Settings</SheetTitle>
        </SheetHeader>
        <div className="h-full">
          <div className="space-y-8 mt-3">
            <div className='space-y-2'>
              <div className='bg-blue-900/20 text-primary px-3 py-1 rounded-md inline-block text-sm'>Multiple Dropdown</div>
              <p className='text-xs pb-2 text-muted'>Check if multiple dropdowns can open in the sidebar.</p>
              <div className="flex items-center space-x-2">
                <Checkbox id="multipleDropdownSwitch" checked={allowMultipleDropdowns} onCheckedChange={(e) => setAllowMultipleDropdowns(e as boolean)} />
                <label htmlFor="multipleDropdownSwitch" className="text-sm text-muted font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Allow
                </label>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SiteSettings;
