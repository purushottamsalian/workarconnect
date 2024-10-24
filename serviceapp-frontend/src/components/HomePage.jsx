import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  console.log('HomePage component rendered'); // Check if this logs in the console

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-400" 
      style={{ width: '1920px', height: '1080px' }} // Set the overall dimensions to 1920 x 1080
    >
      <div
        className="bg-gray-100 p-8 rounded-lg shadow-md"
        style={{ 
          width: '600px', 
          height: '500px',
          position: 'absolute', // Positioning relative to the parent container
          top: '12%', // Adjust top to position above the footer
          left: '30%', // Shift left by 10%
        }} 
      >
        <h2 className="text-6xl font-bold text-blue-900 mb-10 text-center">Welcome to Our Service Portal</h2>
        <p className="mb-6 text-gray-900 text-center">Explore our premium services and make a request today!</p>
        <div className="flex justify-center">
          <Link to="/services" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
