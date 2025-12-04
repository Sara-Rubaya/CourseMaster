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

const router = createBrowserRouter(
  [
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
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/courses",
          loader: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses`);
            return res.data;
          },
          element: <Courses />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <DashboardHome />,
        },
        {
          path: "admin-home",
          element: (
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          ),
        },
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
