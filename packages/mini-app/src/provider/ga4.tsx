import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export function GoogleAnalytics4Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ReactGA.initialize('G-1KSQCV4TWP');
  }, []);

  return children;
}
