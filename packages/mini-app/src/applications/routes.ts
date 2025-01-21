import { RouteObject } from 'react-router';

export const applicationRoutes: RouteObject[] = [
  {
    path: '/application/we-label',
    lazy: async () => ({
      Component: (await import('./we-label/pages/index.page')).default,
    }),
  },
];
