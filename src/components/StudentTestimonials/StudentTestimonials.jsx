import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Sara Rubaya",
    role: "Frontend Developer",
    image:
      "https://i.ibb.co.com/chCxPxzd/7771683223d86b237a3304d6f32828b9.jpg",
    review:
      "This course has all you will need to know about growth marketing. The lessons are clear, practical and very well structured.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Full-Stack Developer",
    image:
      "https://i.ibb.co.com/4gJQPd8p/9731022f0be7c965e880505461643850.jpg",
    review:
      "Amazing platform with hands-on learning. I loved the course structure and the community support was fantastic!",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "React Developer",
    image:
      "https://i.ibb.co.com/tMKp4SVX/professional-woman-smiling-23-2152009549.jpg",
    review:
      "I learned so much in a short time. The instructors are knowledgeable and the content is extremely practical.",
  },
];

const StudentTestimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Auto Slide (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800">
          Hear What Our Amazing Students Say
        </h2>
      </div>

      {/* Slider Container */}
      <div className="max-w-6xl mx-auto relative px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-[1000ms] gap-10"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0">
              <div
                className="bg-white rounded-2xl shadow-xl p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                data-aos="zoom-in"
              >
                {/* IMAGE */}
                <div className="flex justify-center md:justify-end">
                  <div className="w-64 h-64 rounded-full bg-green-600 flex items-center justify-center overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-56 h-56 object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                    "{t.review}"
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae pellentesque pretium mattis orci.
                  </p>

                  <hr className="my-5" />

                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {t.name}
                    </h4>
                    <p className="text-green-600 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === i ? "bg-purple-800 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
