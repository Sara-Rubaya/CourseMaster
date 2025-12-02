// src/components/CourseIncludes.jsx
import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const courseStats = [
  { id: 1, value: 4, label: "Chapters" },
  { id: 2, value: 56, label: "Lessons" },
  { id: 3, value: 42, label: "Hours of Video" },
  { id: 4, value: 3, label: "Free eBooks" },
  { id: 5, value: 10000, label: "Students Community", suffix: "K" },
];

const CourseIncludes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold text-purple-800 mb-4">
          What's Included in Our Course?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Everything you need to become a master in your field.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {courseStats.map((stat) => (
          <div
            key={stat.id}
            data-aos="zoom-in"
            className=" rounded-xl  py-8 px-4 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-5xl md:text-5xl font-bold text-blue-600">
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                suffix={stat.suffix || ""}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </h3>
            <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseIncludes;
