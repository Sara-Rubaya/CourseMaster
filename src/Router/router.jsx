
import axios from "axios"; 
import { createBrowserRouter } from "react-router";  // ✅ kept as you want
import RootLayout from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "../pages/Error/ErrorPage";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: () => axios(`${import.meta.env.VITE_API_URL}/packages`),
          element: <Home />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        
        
        
      ],
    },
  ],
  {
    hydrationFallbackElement: <LoadingSpinner /> 
  }
);

export default router;
