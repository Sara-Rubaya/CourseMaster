import React from "react";

const faqs = [
  {
    question: "What is CourseMaster?",
    answer:
      "CourseMaster is an online learning platform offering high-quality courses with hands-on projects and expert instructors.",
  },
  {
    question: "Do I need prior experience to start?",
    answer:
      "No! Our beginner-friendly courses guide you from zero to advanced level with step-by-step lessons.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, after completing the course and quizzes, you will receive a verified certificate.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "You get lifetime access — watch lessons anytime from any device.",
  },
  {
    question: "Can I get support if I am stuck?",
    answer:
      "Absolutely! You’ll get access to mentor support, community help, and live Q&A sessions.",
  },
];

const FAQ = () => {
  return (
    <section className="py-30 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border border-gray-200 bg-white rounded-xl p-5 shadow-sm"
            >
              <summary className="flex justify-between items-center cursor-pointer font-medium text-lg">
                <span className="text-purple-900">{item.question}</span>
                <span className="transition-transform group-open:rotate-180 text-violet-400">
                  ▼
                </span>
              </summary>

              <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        
      </div>
      <div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="btn bg-violet-700 hover:bg-violet-900 rounded-4xl btn-lg">Get the Course</button>
          <button className="btn btn-outline rounded-4xl text-violet-700 hover:bg-violet-900 hover:text-white btn-lg">View All Courses</button>
        </div>
      </div>
      
      
    </section>
  );
};

export default FAQ;
