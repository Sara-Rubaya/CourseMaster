import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";


const CourseDetails = () => {
  const { id } = useParams(); // course id from URL
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = () => {
    if (!user) {
      // guest -> redirect to login
      navigate("/login");
    } else {
      // logged in -> redirect to payment/enroll page
      navigate(`/enroll/${id}`);
    }
  };

  if (!course) return <div className="text-center text-violet-800 mt-10">Loading course...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-violet-800 mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Instructor:</span> {course.instructor}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Category:</span> {course.category}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Price:</span> <span className="text-violet-800 font-bold">${course.price}</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-violet-800">Description</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>

      <h2 className="text-2xl font-semibold mt-6 text-violet-800">Syllabus</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {course.syllabus?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button
        onClick={handleEnroll}
        className="mt-6 bg-violet-800 text-white px-6 py-3 rounded hover:bg-violet-700 transition-colors duration-300"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
