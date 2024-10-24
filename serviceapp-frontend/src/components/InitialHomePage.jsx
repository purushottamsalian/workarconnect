import React from 'react';
import { useNavigate } from 'react-router-dom';

const InitialHomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home'); // Navigate to the correct path
  };

  return (
    <div 
      className="initial-home-page flex flex-col items-center justify-center" 
      style={{ 
        backgroundImage: "url('src/assets/images/house1.png')",
        height: 'calc(100vh - 140px)', // Subtract navbar (80px) and footer (60px) height
        width: '100vw', // Full width
        backgroundSize: 'cover', // Ensure the entire image is visible
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        padding: '20px', // Optional padding to give some space
      }}
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 shadow-md">Welcome to Workar Connect</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">Your one-stop solution for home services.</p>

      <button 
        onClick={handleStart} 
        className="bg-indigo-600 text-white p-4 rounded transition duration-300 hover:bg-indigo-700 text-xl"
      >
        Let's Start
      </button>
    </div>
  );
};

export default InitialHomePage;
