// src/components/Courses/CourseCard.jsx
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="text-gray-600">Instructor: {course.instructor}</p>
      <p className="text-gray-800">Category: {course.category}</p>
      <p className="text-gray-700">Price: ${course.price}</p>
      <p className="mt-2">{course.description}</p>
    </div>
  );
};

export default CourseCard;
