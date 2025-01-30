import { ToastList } from '@/components/toast';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <ToastList />
    </div>
  );
}
