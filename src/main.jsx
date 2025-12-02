// main.jsx or index.jsx (your entry file)
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import router from './Router/router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './Context/AuthProvider.jsx';
import Aos from 'aos';


function AppWrapper() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
