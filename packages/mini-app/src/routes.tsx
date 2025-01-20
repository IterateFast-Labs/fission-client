import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
  // createMemoryRouter,
} from 'react-router';

import { ErrorBoundary } from './error';
import { AuthRequiredRoutes } from './features/auth/routes/auth-routes';

const routeList: RouteObject[] = [
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./pages/start.page')).StartPage,
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
          Component: (await import('./pages/desktop.page')).DesktopPage,
        }),
      },
    ],
    errorElement: <ErrorBoundary />,
  },
];

const router =
  import.meta.env.VITE_ENVIRONMENT === 'development'
    ? createMemoryRouter(routeList)
    : createBrowserRouter(routeList);

export function Routes() {
  return <RouterProvider router={router} />;
}
