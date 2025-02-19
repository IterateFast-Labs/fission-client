import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = import.meta.env.VITE_ENVIRONMENT === 'development';
  const isDisabled =
    import.meta.env.VITE_PROVIDER_DISABLE_TANSTACK_DEVTOOLS === 'true';
  const devtoolEnabled = isDev && !isDisabled;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 1.5, // 1.5 minutes
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {devtoolEnabled && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  );
}
