import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const settingStoreKey = '@fission/setting-store';

export interface SettingStore {
  skipBootConsole: boolean;
  setSkipBootConsole(skipBootConsole: boolean): void;
}

export const useSettingStore = create(
  persist<SettingStore>(
    (set) => ({
      skipBootConsole: false,
      setSkipBootConsole(skipBootConsole: boolean) {
        return set({ skipBootConsole });
      },
    }),
    {
      name: settingStoreKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
