// src/components/MeetTeacher.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample teacher data
const teachers = [
  {
    id: 1,
    name: "Dr. John Doe",
    designation: "Senior JavaScript Instructor",
    bio: "Passionate about teaching modern web development and helping students build real-world projects.",
    image: "https://i.ibb.co.com/RwGN5ZH/smiling-showing-thumb-up-young-male-teacher-wearing-glasses-points-blackboard-classroom.jpg",
  },
  {
    id: 2,
    name: "Ms. Jane Smith",
    designation: "React & MERN Stack Instructor",
    bio: "Focused on creating interactive, scalable, and production-ready applications with students.",
    image: "https://i.ibb.co.com/jd8QbZF/images-q-tbn-ANd9-Gc-TPLE3-BPMIkl4-Elt-Bm-Rf-Hf1-KDv-NGw-JAo1y-A-s.jpg",
  },
  {
    id: 3,
    name: "Mr. Alan Turing",
    designation: "Backend & Node.js Expert",
    bio: "Guides students in building robust backend systems and integrating APIs efficiently.",
    image: "https://i.ibb.co.com/fGGY1NyN/images-q-tbn-ANd9-Gc-TSm-Qx-T-93-CDHNSp-k-Hjb-Ujz3-MSUn0wcro7ng-s.jpg",
  },
];

const MeetTeacher = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section id="meet-our-teacher" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Meet Our Teachers
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Learn from industry experts and top instructors who are passionate about teaching.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            data-aos="zoom-in"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
            <p className="text-indigo-600 font-medium">{teacher.designation}</p>
            <p className="text-gray-600 mt-2">{teacher.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeacher;
