'use client';
import { Checkbox } from '@/components/ui/checkbox';
import useSettingsStore from '@/stores/settingsStore';

export default function SettingsForm() {
  const allowMultipleDropdowns = useSettingsStore((state) => state.allowMultipleDropdowns);
  const setAllowMultipleDropdowns = useSettingsStore((state) => state.setAllowMultipleDropdowns);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="multipleDropdownSwitch" checked={allowMultipleDropdowns} onCheckedChange={(e) => setAllowMultipleDropdowns(e)} />
      <label htmlFor="multipleDropdownSwitch" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Allow Multiple Dropdown
      </label>
    </div>
  );
}
