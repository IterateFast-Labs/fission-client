import { AlertList } from '@/components/alert';

export function AlertProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AlertList />
    </>
  );
}
