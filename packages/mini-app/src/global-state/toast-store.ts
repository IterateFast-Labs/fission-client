import { create } from 'zustand';

import { ToastProps } from '@/components/toast';

export const settingStoreKey = '@fission/setting-store';

export interface SettingStore {
  toasts: ToastProps[];
  pushToast(toast: ToastProps): void;
  removeToast(id: string): void;
  removeAllToasts(): void;
}

export const useToastStore = create<SettingStore>((set, get) => ({
  toasts: [],
  pushToast(toast) {
    const alreadyExisted = get().toasts.some((t) => t.id === toast.id);

    if (alreadyExisted) {
      return;
    }

    set((state) => ({
      toasts: [toast, ...state.toasts],
    }));
  },
  removeToast(id) {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
  removeAllToasts() {
    set({ toasts: [] });
  },
}));
