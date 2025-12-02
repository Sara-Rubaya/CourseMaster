// src/components/StudentTestimonials.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Sara Rubaya",
    role: "Frontend Developer",
    image: "https://i.ibb.co.com/chCxPxzd/7771683223d86b237a3304d6f32828b9.jpg",
    review:
      "CourseMaster transformed my career! The lessons are clear, practical, and the projects are fun to build.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Full-Stack Developer",
    image: "https://i.ibb.co.com/4gJQPd8p/9731022f0be7c965e880505461643850.jpg",
    review:
      "Amazing platform with hands-on learning. I loved the course structure and the community support was fantastic!",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "React Developer",
    image: "https://i.ibb.co.com/tMKp4SVX/professional-woman-smiling-23-2152009549.jpg",
    review:
      "I learned so much in a short time. The instructors are knowledgeable and the content is very practical.",
  },
];

const StudentTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Hear What Our Amazing Students Say
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Real feedback from learners who have experienced CourseMaster first-hand.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            data-aos="zoom-in"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {t.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{t.role}</p>
            <p className="text-gray-700">{t.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
