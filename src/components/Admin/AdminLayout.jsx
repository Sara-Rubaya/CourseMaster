// src/components/Admin/AdminLayout.jsx
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { FiMenu } from "react-icons/fi";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 fixed md:relative z-20 h-full`}
      >
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Header */}
        <header className="bg-white shadow p-4 flex items-center justify-between md:justify-end">
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <p className="text-gray-700 font-semibold">Admin</p>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
