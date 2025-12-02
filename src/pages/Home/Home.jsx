import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Hero/Banner';
import Teacher from '../../components/Teacher/Teacher';
import CourseIncludes from '../../components/CourseIncludes/CourseIncludes';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner>
           <Teacher></Teacher>
           <CourseIncludes></CourseIncludes>
        </div>
    );
};

export default Home;