
import React from "react";

const courses = [
  "React Launcher",
  "WebDev Starter Pack",
  "Introduction to Software Engineering",
  "Frontend Fundamentals",
];

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-violet-800 mb-6">
          About CourseMaster
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CourseMaster is a modern E-learning platform designed to connect students, instructors, and administrators in a seamless educational ecosystem. Our goal is to make learning accessible, interactive, and engaging for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">For Students</h3>
            <p className="text-gray-600">
              Browse, enroll, and track your progress in thousands of courses across diverse topics. Stay motivated with quizzes, assignments, and progress tracking.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">For Instructors</h3>
            <p className="text-gray-600">
              Create and manage courses with ease. Define batches, upload lessons, and interact with students to ensure an immersive learning experience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">For Administrators</h3>
            <p className="text-gray-600">
              Monitor platform activity, track enrollments, review assignments, and maintain a secure, scalable environment for all users.
            </p>
          </div>
        </div>

        <div className="mt-12 text-left">
          <h3 className="text-3xl font-bold text-violet-800 mb-4">Our Popular Courses</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            {courses.map((course, index) => (
              <li key={index} className="bg-gray-50 text-center p-9 mx-10 rounded shadow hover:shadow-md hover:bg-violet-900 hover:text-white text-xl transition">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-gray-500">
          At CourseMaster, we are committed to delivering a high-quality, intuitive learning platform that empowers both students and educators to achieve their goals.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
