import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
} from 'react-router';

import { applicationRoutes } from './applications/routes';
import { ErrorBoundary } from './error';
import { AuthRequiredRoutes } from './kernel/auth/routes/auth-routes';

const routeList: RouteObject[] = [
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./kernel/pages/start.page')).StartPage,
    }),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/desktop',
    element: <AuthRequiredRoutes />,
    children: [
      {
        path: '/desktop',
        lazy: async () => ({
          Component: (await import('./kernel/pages/desktop.page')).DesktopPage,
        }),
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/application',
    element: <AuthRequiredRoutes />,
    children: [...applicationRoutes],
  },
];

const router =
  import.meta.env.VITE_ENVIRONMENT === 'development'
    ? createMemoryRouter(routeList)
    : createBrowserRouter(routeList);

export function Routes() {
  return <RouterProvider router={router} />;
}
