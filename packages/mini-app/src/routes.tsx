import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router';

import { applicationRoutes } from './applications/routes';
import { ErrorBoundary } from './error';
import { AuthRequiredRoutes } from './kernel/auth/routes/auth-routes';

const routeList: RouteObject[] = [
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./kernel/pages/start.page')).StartPage,
    }),
    HydrateFallback: () => <div></div>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/desktop',
    element: <AuthRequiredRoutes />,
    HydrateFallback: () => <div></div>,
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
    HydrateFallback: () => <div></div>,
    children: [...applicationRoutes],
  },
];

const router = createBrowserRouter(routeList);

export function Routes() {
  return <RouterProvider router={router} />;
}
