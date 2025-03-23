import { create } from 'zustand';

import { AlertProps } from '@/components/alert';

export const alertStoreKey = '@fission/alert-store';

export interface AlertStore {
  alerts: AlertProps[];
  pushAlert(alert: AlertProps): void;
  removeAlert(id: string): void;
  removeAllAlerts(): void;
}

export const useAlertStore = create<AlertStore>((set, get) => ({
  alerts: [],
  pushAlert(alert) {
    const alreadyExisted = get().alerts.some((t) => t.id === alert.id);

    if (alreadyExisted) {
      return;
    }

    set((state) => ({
      alerts: [alert, ...state.alerts],
    }));
  },
  removeAlert(id) {
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    }));
  },
  removeAllAlerts() {
    set({ alerts: [] });
  },
}));
