// src/Routes/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!user || role !== "admin") {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default AdminRoute;
