
import axios from "axios"; 
import { createBrowserRouter } from "react-router";  // ✅ kept as you want
import RootLayout from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses";
import CourseDetails from "../components/Courses/CourseDetails";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: () => axios(`${import.meta.env.VITE_API_URL}/courses`),
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
        {
          path:'/aboutUs',
          element: <AboutUs></AboutUs>
        },
       {
 
  path:'/courses',
  loader: () => axios.get(`${import.meta.env.VITE_API_URL}/courses`), // fetch from backend
  element:<Courses />

},
        {
          path:'/details/:id',
          element: <CourseDetails></CourseDetails>
        }
        
        
        
      ],
    },
  ],
  {
    hydrationFallbackElement: <LoadingSpinner /> 
  }
);

export default router;
