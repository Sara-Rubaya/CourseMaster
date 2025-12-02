import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Hero/Banner';
import Teacher from '../../components/Teacher/Teacher';
import CourseIncludes from '../../components/CourseIncludes/CourseIncludes';
import WhatWillILearn from '../../components/WhatWillILearn/WhatWillILearn';
import CourseTopics from '../../components/CourseTopics/CourseTopics';
import StudentTestimonials from '../../components/StudentTestimonials/StudentTestimonials';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner>
           <Teacher></Teacher>
           <CourseIncludes></CourseIncludes>
           <WhatWillILearn></WhatWillILearn>
           <CourseTopics></CourseTopics>
           <StudentTestimonials></StudentTestimonials>
        </div>
    );
};

export default Home;