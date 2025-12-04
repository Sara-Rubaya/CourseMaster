// src/components/Admin/EditCourse.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams(); // course id from URL
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    price: "",
    category: "",
    tags: "",
    description: "",
    syllabus: "",
  });

  // Fetch course data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse({
          title: data.title,
          instructor: data.instructor,
          price: data.price,
          category: data.category,
          tags: data.tags.join(", "),
          description: data.description,
          syllabus: data.syllabus.join("\n"),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/courses/${id}`, {
        ...course,
        price: Number(course.price),
        tags: course.tags.split(",").map((tag) => tag.trim()),
        syllabus: course.syllabus.split("\n").map((item) => item.trim()),
      });
      alert("Course updated successfully!");
      navigate("/admin/courses");
    } catch (err) {
      console.error(err);
      alert("Error updating course. Check console.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-violet-800 mb-6">Edit Course</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Course Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Instructor</label>
            <input
              type="text"
              name="instructor"
              value={course.instructor}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={course.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={course.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={course.tags}
              onChange={handleChange}
              placeholder="React, Frontend"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            ></textarea>
          </div>

          {/* Syllabus */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Syllabus (one item per line)
            </label>
            <textarea
              name="syllabus"
              value={course.syllabus}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-800 text-white px-6 py-3 rounded-2xl hover:bg-violet-700 transition-colors duration-300"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
