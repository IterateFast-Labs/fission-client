import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from '@/provider/index.tsx';
import { Routes } from '@/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Routes />
    </Provider>
  </StrictMode>,
);
