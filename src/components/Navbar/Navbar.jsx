import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'bg-purple-700 text-white' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructor"
                  className={({ isActive }) =>
                    isActive ? 'bg-purple-700 text-white' : ''
                  }
                >
                  Instructor
                </NavLink>
              </li>
              <li>
                <details>
                  <summary>Courses</summary>
                  <ul className="p-2 bg-base-100 w-40 z-50">
                    <li><a>React Launcher</a></li>
                    <li><a>WebDev Starter Pack</a></li>
                    <li><a>Introduction to Software Engineering</a></li>
                    <li><a>Frontend Fundamentals</a></li>
                    <li><a>Node Proficiency Guide</a></li>
                  </ul>
                </details>
              </li>
              <li><a>About Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CourseMaster</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'bg-purple-700 text-white px-3 py-1 rounded' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructor"
                className={({ isActive }) =>
                  isActive ? 'bg-purple-700 text-white px-3 py-1 rounded' : ''
                }
              >
                Instructor
              </NavLink>
            </li>
            <li>
              <details>
                <summary>Courses</summary>
                <ul className="p-2 bg-base-100 w-40 z-50">
                  <li><a>React Launcher</a></li>
                  <li><a>WebDev Starter Pack</a></li>
                  <li><a>Introduction to Software Engineering</a></li>
                  <li><a>Frontend Fundamentals</a></li>
                  <li><a>Node Proficiency Guide</a></li>
                </ul>
              </details>
            </li>
            <li><a>About Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn hover:bg-purple-800 bg-purple-400">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
