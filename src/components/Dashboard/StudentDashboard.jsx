// src/components/Dashboard/StudentDashboard.jsx
import React from "react";
import { Link } from "react-router";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-violet-800 mb-8">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: My Courses */}
        <Link to="/my-courses">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 text-violet-800">My Courses</h2>
            <p className="text-gray-700">
              View your enrolled courses and track your progress.
            </p>
          </div>
        </Link>

        {/* Card: Profile */}
        <Link to="/profile">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 text-violet-800">Profile</h2>
            <p className="text-gray-700">
              Update your personal info, password, and preferences.
            </p>
          </div>
        </Link>

        {/* Card: Certificates */}
        <Link to="/certificates">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2 text-violet-800">Certificates</h2>
            <p className="text-gray-700">
              View and download certificates of completed courses.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
