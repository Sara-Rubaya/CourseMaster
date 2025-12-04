// src/components/Admin/AdminCourses.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/courses");
      setCourses(data.courses);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://localhost:5000/api/courses/${id}`);
        setCourses(courses.filter((c) => c._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-violet-800 mb-6">Manage Courses</h1>
      <div className="flex flex-wrap gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-80 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-violet-800">{course.title}</h2>
              <p className="text-gray-700 mt-1">Instructor: {course.instructor}</p>
              <p className="text-gray-700">Category: {course.category}</p>
              <p className="text-gray-800 font-semibold mt-1">${course.price}</p>
              <p className="text-gray-700 mt-2 line-clamp-3">{course.description}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <Link to={`/admin/courses/edit/${course._id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(course._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/admin/courses/add">
          <button className="bg-violet-800 text-white px-6 py-3 rounded-2xl hover:bg-violet-700 transition">
            Add New Course
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default AdminCourses;
