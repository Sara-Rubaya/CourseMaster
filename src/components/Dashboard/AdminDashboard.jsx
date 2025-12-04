// src/components/Dashboard/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router";
import { FiBook, FiUsers, FiBarChart2 } from "react-icons/fi";

const AdminDashboard = () => {
  const cards = [
    {
      title: "Manage Courses",
      description: "Add, edit, or delete courses. Keep your course library up to date.",
      icon: <FiBook className="text-4xl text-violet-800 mb-4" />,
      link: "/admin/courses",
    },
    {
      title: "Manage Users",
      description: "View all students and instructors. Assign roles or remove users.",
      icon: <FiUsers className="text-4xl text-violet-800 mb-4" />,
      link: "/admin/users",
    },
    {
      title: "Reports & Analytics",
      description: "Track enrollment stats, revenue, and other important metrics.",
      icon: <FiBarChart2 className="text-4xl text-violet-800 mb-4" />,
      link: "/admin/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-violet-800 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <Link key={idx} to={card.link}>
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer flex flex-col items-center text-center">
              {card.icon}
              <h2 className="text-2xl font-semibold mb-2 text-violet-800">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
