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
    path: '/account',
    element: <AuthRequiredRoutes />,
    HydrateFallback: () => <div></div>,
    children: [
      {
        path: '/account',
        lazy: async () => ({
          Component: (await import('./kernel/pages/account.page')).AccountPage,
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
  {
    path: '/bluescreen',
    lazy: async () => ({
      Component: (await import('./kernel/pages/bluescreen.page'))
        .BluescreenPage,
    }),
    HydrateFallback: () => <div></div>,
    errorElement: <ErrorBoundary />,
  },
];

const router = createBrowserRouter(routeList);

export function Routes() {
  return <RouterProvider router={router} />;
}
