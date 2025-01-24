import { RouteObject } from 'react-router';

export const applicationRoutes: RouteObject[] = [
  {
    path: '/application/tay',
    lazy: async () => ({
      Component: (await import('./tay/pages/index.page')).default,
    }),
  },
];
