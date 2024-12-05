import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  allowMultipleDropdowns: boolean;
  setAllowMultipleDropdowns: (value: boolean) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      allowMultipleDropdowns: false,
      setAllowMultipleDropdowns: (value) => set(() => ({ allowMultipleDropdowns: value })),
    }),
    {
      name: 'allowMultipleDropdowns',
    }
  )
);

export default useSettingsStore;
