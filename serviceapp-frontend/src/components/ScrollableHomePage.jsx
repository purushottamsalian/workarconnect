import React, { useState, useEffect } from 'react';
import ServiceProviderPage from './ServiceProviderPage';

const ScrollableHomePage = ({ setShowServices }) => {
  const [showServices, setLocalShowServices] = useState(false);

  useEffect(() => {
    if (showServices) {
      // Scroll to the services section smoothly when services are shown
      document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [showServices]);

  const handleViewServices = () => {
    setLocalShowServices(true);
    setShowServices(true); // Ensure global state is updated
  };

  return (
    <div className="home-page">
      <div className="flex flex-col items-center justify-center h-screen bg-cover" style={{ backgroundImage: "url('src/assets/images/house.png')" }}>
        {/* Container for heading and paragraph */}
        <div className="bg-purple-100 bg-opacity-70 rounded-lg p-6 mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4 shadow-md">Welcome to Workar Connect</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-6">Your one-stop solution for home services.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex justify-center">
          <button 
            onClick={handleViewServices} 
            className="bg-indigo-600 text-white p-4 rounded transition duration-300 hover:bg-indigo-700 text-xl"
          >
            View Services
          </button>
        </div>
      </div>

      {showServices && (
        <div id="services-section" className="services-section min-h-screen pt-10 bg-gray-100">
          <ServiceProviderPage />
        </div>
      )}
    </div>
  );
};

export default ScrollableHomePage;
