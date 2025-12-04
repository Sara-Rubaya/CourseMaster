import axios from "axios"; 
import { createBrowserRouter } from "react-router"; // ✅ fixed import
import RootLayout from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import StudentDashboard from "../components/Dashboard/StudentDashboard";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoutes";
import DashboardHome from "../components/Dashboard/DashboardHome";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";

import Forbidden from "../components/Dashboard/Forbidden";
import AddCourse from "../components/Courses/AddCourse";
import EditCourse from "../components/Courses/EditCourse";
import CourseDetails from "../components/Courses/CourseDetails";
import ManageUsers from "../components/Admin/ManageUser";


const router = createBrowserRouter(
  [
    // ----------------- Public Routes -----------------
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses`);
            return res.data;
          },
          element: <Home />,
        },
        { path: "register", 
          element: <Register />
         },
        { 
          path: "login",
           element: <Login /> 
          },
          
        { 
          path: "aboutUs", 
          element: <AboutUs /> 
        },
       {
    path: "courses",
    loader: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses`);
      return res.data;
    },
    element: <Courses />,
  },
 {
  path: "details/:id", // <-- :id is required
  element: <CourseDetails />,
},
        { path: "forbidden", element: <Forbidden /> }, 
       
      ],
    },

    // ----------------- Dashboard Routes -----------------
    {
      path: "dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        { index: true, element: <DashboardHome /> },

        // Admin Routes
        {
          path: "admin-home",
          element: (
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          ),
        },
        
        {
          path:"manage-course",
          element:<EditCourse></EditCourse>
        },
        {
          path:"add-course",
          element:<AddCourse></AddCourse>
        },
        {
          path:"manage-users",
          element:<ManageUsers></ManageUsers>
        },

        // Student Routes
        {
          path: "student-home",
          element: (
            <StudentRoute>
              <StudentDashboard />
            </StudentRoute>
          ),
        },
      ],
    },
  ],
  {
    hydrationFallbackElement: <LoadingSpinner />,
  }
);

export default router;
