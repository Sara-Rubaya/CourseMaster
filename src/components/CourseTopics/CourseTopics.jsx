// src/components/CourseTopics.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topics = [
  "React Basics & Component Architecture",
  "State Management with Context API & Redux",
  "Routing with React Router",
  "Styling with TailwindCSS and CSS Modules",
  "Backend Integration with Node.js & Express",
  "Database Handling with MongoDB & Mongoose",
  "RESTful API Development",
  "Authentication & Authorization (JWT, Bcrypt)",
  "Project Deployment on Netlify / Vercel",
  "Best Practices & Code Optimization",
];

const CourseTopics = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleShowMore = () => {
    setVisibleCount(topics.length);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold text-purple-800 mb-4">
          What Topics Are Covered in the Course?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Explore the core concepts and practical skills you'll gain from this course.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.slice(0, visibleCount).map((topic, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 flex items-start gap-4"
          >
            <div className="text-purple-800 font-bold text-xl flex-shrink-0">
              {index + 1}.
            </div>
            <p className="text-gray-700">{topic}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < topics.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-violet-700 text-white font-semibold px-8 py-4 rounded-4xl shadow-lg hover:bg-violet-900 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default CourseTopics;
