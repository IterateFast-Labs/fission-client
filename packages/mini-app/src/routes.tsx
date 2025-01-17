import { RouterProvider, createBrowserRouter } from 'react-router';

import { AuthRequiredRoutes } from './features/auth/routes/auth-routes';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./pages/start.page')).StartPage,
    }),
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
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
