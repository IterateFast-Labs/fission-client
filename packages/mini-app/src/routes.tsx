import {
  RouterProvider,
  createBrowserRouter,
  // createMemoryRouter,
} from 'react-router';

import { ErrorBoundary } from './error';
import { AuthRequiredRoutes } from './features/auth/routes/auth-routes';

const router = createBrowserRouter([
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
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
