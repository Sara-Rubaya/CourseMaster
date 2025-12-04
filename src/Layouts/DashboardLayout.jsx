import React, { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import useUserRole from "../Hooks/useUserRole";

import AdminDashboard from "../components/Dashboard/AdminDashboard";
import StudentDashboard from "../components/Dashboard/StudentDashboard";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // Pass user email to the hook
  const { role, roleLoading } = useUserRole(user?.email);
  const location = useLocation();

  if (roleLoading) {
    return (
      <div className="text-center pt-32 text-lg font-semibold">
        Loading dashboard...
      </div>
    );
  }

  // Normalize role: treat "customer" same as "student"
  const normalizedRole = role === "customer" ? "student" : role;

  const activeClass =
    "flex items-center p-2 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700";
  const normalClass =
    "flex items-center p-2 rounded-lg dark:text-white text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group";

  // Role-based menus
  const menuItems = {
    admin: [
      { path: "/dashboard/admin-home", label: "Dashboard Home" },
      { path: "/dashboard/manage-users", label: "Manage Users" },
      { path: "/dashboard/manage-courses", label: "Manage Courses" },
    ],
    student: [
      { path: "/dashboard/my-courses", label: "My Courses" },
      { path: "/dashboard/profile", label: "Profile" },
    ],
  };

  const renderDashboardHome = () => {
    if (normalizedRole === "admin") return <AdminDashboard />;
    if (normalizedRole === "student") return <StudentDashboard />;
    return <div className="p-8 text-center">Role not recognized</div>;
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/xK0tyB1q/Whats-App-Image-2025-07-13-at-22-52-57.jpg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              CourseMaster
            </span>
          </NavLink>

          <div className="flex items-center">
            <button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="user"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems[normalizedRole]?.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pt-20 pl-64 min-h-screen bg-gray-100">
        {location.pathname === "/dashboard" ? renderDashboardHome() : <Outlet />}
      </div>
    </div>
  );
};

export default DashboardLayout;
