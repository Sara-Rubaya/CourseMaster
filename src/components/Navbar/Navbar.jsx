import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const handleScrollToInstructor = (e) => {
    e.preventDefault();
    const section = document.getElementById('meet-our-teacher');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar shadow-sm bg-violet-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-violet-400 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className='hover:bg-violet-900' href="/">Home</a>
              </li>
              <li>
                <a className='hover:bg-violet-900' href="#meet-our-teacher" onClick={handleScrollToInstructor}>
                  Instructor
                </a>
              </li>
              <li >
                <details >
                  <summary className=' hover:bg-violet-900'>Courses</summary>
                  <ul className="p-2 bg-violet-400 w-40 z-50">
                    <li><a className='hover:bg-violet-900'>React Launcher</a></li>
                    <li><a className='hover:bg-violet-900'>WebDev Starter Pack</a></li>
                    <li><a className='hover:bg-violet-900'>Introduction to Software Engineering</a></li>
                    <li><a className='hover:bg-violet-900'>Frontend Fundamentals</a></li>
                    <li><a className='hover:bg-violet-900'>Node Proficiency Guide</a></li>
                  </ul>
                </details>
              </li>
              <li><a className='hover:bg-violet-900'>About Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CourseMaster</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a hover:bg-violet-900 href="/">Home</a>
            </li>
            <li>
              <a hover:bg-violet-900 href="#meet-our-teacher" onClick={handleScrollToInstructor}>
                Instructor
              </a>
            </li>
            <li>
              <details>
                <summary>Courses</summary>
                <ul className="p-2 bg-violet-400 w-40 z-50">
                  <li><a className='hover:bg-violet-900'>React Launcher</a></li>
                  <li><a className='hover:bg-violet-900'>WebDev Starter Pack</a></li>
                  <li><a className='hover:bg-violet-900'>Introduction to Software Engineering</a></li>
                  <li><a className='hover:bg-violet-900'>Frontend Fundamentals</a></li>
                  <li><a className='hover:bg-violet-900'>Node Proficiency Guide</a></li>
                </ul>
              </details>
            </li>
            <li><a>About Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn hover:bg-violet-800 bg-violet-400">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
