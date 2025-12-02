// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CourseMaster</h2>
          <p className="text-gray-200">
            Empowering learners to build skills in web development, software engineering, and full-stack technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li>
              <a href="/courses" className="hover:text-gray-300 transition">Courses</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none bg-amber-50 text-gray-800"
            />
            <button className="bg-purple-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-700 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} CourseMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
