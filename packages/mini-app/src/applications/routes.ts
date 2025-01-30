import { RouteObject } from 'react-router';

export const applicationRoutes: RouteObject[] = [
  {
    path: '/application/tay',
    lazy: async () => {
      const module = await import('./tay/pages/index.page');
      return { Component: module.default as React.ComponentType };
    },
  },
];
