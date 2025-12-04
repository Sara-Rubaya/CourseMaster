import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router'; // ✅ fixed import

import 'aos/dist/aos.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Aos from 'aos';

import AuthProvider from './Context/AuthProvider.jsx';
import router from './Router/router.jsx';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
