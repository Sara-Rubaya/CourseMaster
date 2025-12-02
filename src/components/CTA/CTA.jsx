import React from "react";

const CTA = () => {
  return (
    <section className="py-30 bg-violet-200 text-violet-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Learning Today!
            </h2>
            <p className="text-lg md:text-xl">
              Unlock your potential with our expertly designed courses. 
              Learn at your own pace, gain practical skills, and get certified 
              to advance your career in the tech industry.
            </p>
          </div>

          {/* Right Column: Button */}
          <div className="flex justify-start md:justify-end">
            <button className="btn btn-primary btn-lg">Get the Course</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
