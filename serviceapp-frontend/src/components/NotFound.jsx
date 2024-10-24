// src/components/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-800 to-red-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-300">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-4 inline-block text-indigo-300 hover:underline">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
