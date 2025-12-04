// src/components/Courses/Courses.jsx
import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard"; // ✅ keep the path same

const Courses = () => {
  const { data } = useLoaderData();
  const courses = data?.courses || [];

  // State for search, sort, filter
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "low" or "high"
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // adjust as needed

  // Filtered, searched, sorted courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (search) {
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.instructor.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter category
    if (categoryFilter) {
      result = result.filter((c) => c.category === categoryFilter);
    }

    // Filter tags
    if (tagFilter) {
      result = result.filter((c) => c.tags?.includes(tagFilter));
    }

    // Sort price
    if (sortOrder === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [courses, search, sortOrder, categoryFilter, tagFilter]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Extract unique categories and tags
  const categories = [...new Set(courses.map((c) => c.category))];
  const tags = [...new Set(courses.flatMap((c) => c.tags || []))];

  return (
    <div className="courses-grid bg-gray-50 text-violet-800 px-4 py-8">
      <h1 className="text-5xl text-center py-8 font-bold">Courses</h1>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title/instructor"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset page
          }}
          className="border rounded px-3 py-2"
        />

        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded px-3 py-2"
        >
          <option value="">Sort by Price</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={tagFilter}
          onChange={(e) => {
            setTagFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded px-3 py-2"
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      {currentCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-10">
          {currentCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl py-8">No courses found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded bg-white text-violet-800 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1 ? "bg-violet-800 text-white" : "bg-white text-violet-800"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded bg-white text-violet-800 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
