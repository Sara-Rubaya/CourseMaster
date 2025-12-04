// src/components/Courses/CourseCard.jsx
import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  return (
   <div className="course-card border p-4 rounded shadow-md">
  <h2 className="text-xl font-bold">{course.title}</h2>
  <p className="text-gray-800"><span className="font-bold">Instructor:</span> {course.instructor}</p>
  <p className="text-gray-800"><span className="font-bold">Category:</span> {course.category}</p>
  <p className="text-gray-800 "><span className="font-bold">Price:</span> ${course.price}</p>
  <p className="text-gray-800"><span className="font-bold">Description: </span>{course.description}</p>

  {/* Button centered */}
  <div className="flex justify-center mt-4">
    <Link to={`/details/${course._id}`}>
    <button className="btn w-full bg-violet-900 text-white px-4 py-2 rounded-2xl">
      View Details
    </button></Link>
  </div>
</div>

  );
};

export default CourseCard;
