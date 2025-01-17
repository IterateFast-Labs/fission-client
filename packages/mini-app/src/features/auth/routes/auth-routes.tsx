import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export function AuthRequiredRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isTokenValid = Boolean(token); // TODO: validate token

    if (!isTokenValid) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
}
