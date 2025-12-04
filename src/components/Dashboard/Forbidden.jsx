import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">403</h1>
      <h2 className="text-2xl font-semibold mb-6">Access Forbidden</h2>
      <p className="mb-6 text-gray-700">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-violet-800 text-white rounded-lg hover:bg-violet-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default Forbidden;