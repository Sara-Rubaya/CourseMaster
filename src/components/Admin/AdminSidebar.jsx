// src/components/Admin/AdminSidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router";
import { FiHome, FiBook, FiPlus, FiLogOut } from "react-icons/fi";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear auth token
    navigate("/login");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-violet-800">Admin Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin"
          className="flex items-center px-4 py-2 rounded hover:bg-violet-100 transition"
        >
          <FiHome className="mr-3" /> Dashboard
        </Link>

        <Link
          to="/admin/courses"
          className="flex items-center px-4 py-2 rounded hover:bg-violet-100 transition"
        >
          <FiBook className="mr-3" /> Manage Courses
        </Link>

        <Link
          to="/admin/courses/add"
          className="flex items-center px-4 py-2 rounded hover:bg-violet-100 transition"
        >
          <FiPlus className="mr-3" /> Add Course
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 rounded hover:bg-red-100 text-red-600 transition mt-auto w-full"
        >
          <FiLogOut className="mr-3" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
