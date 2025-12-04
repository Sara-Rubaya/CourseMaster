// src/Pages/Dashboard/DashboardHome.jsx
import React from "react";

import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import useUserRole from "../../Hooks/useUserRole";
import LoadingSpinner from "../LoadingSpinner";
import Forbidden from "./Forbidden";

const DashboardHome = () => {
  const { role, roleLoading, roleError } = useUserRole();

  if (roleLoading) {
    return <LoadingSpinner />;
  }

  if (roleError) {
    return <div className="p-8 text-red-500">Error loading role: {roleError.message}</div>;
  }

  if (role === "student") {
    return <StudentDashboard />;
  } else if (role === "admin") {
    return <AdminDashboard />;
  } else {
    return <Forbidden />;
  }
};

export default DashboardHome;
