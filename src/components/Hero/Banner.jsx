import React from 'react';
import SoftwareDevGraphic from '../../assets/971.jpg'; 
import SplitText from './SplitText';
import DotGrid from './DotGrid'; // make sure you import DotGrid correctly

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (
    <div 
      className="relative min-h-screen text-white overflow-hidden p-8 lg:px-20 flex items-center"
      style={{
        backgroundImage: 'linear-gradient(145deg, #2A004A 0%, #6C12C5 100%)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* DotGrid Background */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto z-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:text-left text-center">
          <SplitText
            text="Welcome to CourseMaster"
            className="text-7xl font-semibold mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg opacity-80 mb-8 max-w-lg">
            Your ultimate platform to browse, enroll, and master online courses.
            Learn from top instructors and track your progress effortlessly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/courses"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
            >
              Explore Courses
            </a>
            <a
              href="/about"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={SoftwareDevGraphic} 
            alt="Isometric Software Development Graphic" 
            className="w-full max-w-xl h-auto"
            style={{ filter: 'drop-shadow(0 0 20px rgba(157, 62, 209, 0.6))' }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
