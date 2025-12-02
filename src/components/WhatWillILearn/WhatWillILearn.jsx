// src/components/WhatWillILearn.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  {
    id: 1,
    title: "React Launcher",
    description:
      "Kickstart your React journey with practical projects and hands-on exercises to build modern web apps.",
  },
  {
    id: 2,
    title: "WebDev Starter Pack",
    description:
      "Learn the fundamentals of web development including HTML, CSS, JavaScript, and responsive design.",
  },
  {
    id: 3,
    title: "Introduction to Software Engineering",
    description:
      "Understand software engineering principles, development life cycles, and best practices for scalable apps.",
  },
  {
    id: 4,
    title: "Frontend Fundamentals",
    description:
      "Master frontend development with React, TailwindCSS, and essential UI/UX patterns.",
  },
  // Removed Node Proficiency Guide to balance height
];

const WhatWillILearn = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold text-purple-800 mb-4">
          What Will I Learn?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          These courses are carefully designed to take you from beginner to pro in full-stack development.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Large Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start h-full">
          <img
            src="https://i.ibb.co/20Q6h8mP/programming-background-with-person-working-with-codes-computer.jpg"
            alt="Courses Illustration"
            className="rounded-xl shadow-lg object-cover h-full w-full mt-30"
            data-aos="fade-right"
          />
        </div>

        {/* Right: Course Cards */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              data-aos="fade-left"
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 flex-1"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                {course.id}. {course.title}
              </h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
        <a
          href="/get-course"
          className="bg-purple-600 text-white font-semibold px-8 py-4 rounded-4xl shadow-lg hover:bg-purple-800 transition duration-300"
        >
          Get the Courses
        </a>
        <a
          href="/about-teacher"
          className="border border-purple-600 text-purple-600 font-semibold px-8 py-4 rounded-4xl hover:bg-purple-800 hover:text-white transition duration-300"
        >
          About the Teacher
        </a>
      </div>
    </section>
  );
};

export default WhatWillILearn;
