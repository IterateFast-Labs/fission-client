import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import {
  checkAccessTokenExpired,
  useAuthStore,
} from '@/global-state/auth-store';

export function AuthRequiredRoutes() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const isTokenExpired = !accessToken || checkAccessTokenExpired(accessToken);

    if (isTokenExpired) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
}
