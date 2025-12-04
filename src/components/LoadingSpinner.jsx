import React from "react";

const LoadingSpinner = () => (
  <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
    {/* Spinner */}
    <div className="w-16 h-16 border-4 border-t-violet-900 border-gray-300 rounded-full animate-spin"></div>

    {/* Loading text */}
    <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
      Loading, please wait...
    </p>
  </div>
);

export default LoadingSpinner;
