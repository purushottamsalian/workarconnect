import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo1.png"; // Adjust the path if necessary

const Navbar = ({ setShowServices }) => { // Receive setShowServices as a prop
  const location = useLocation();

  const handleServicesClick = () => {
    setShowServices(true); // Set services to show when clicked
  };

  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logo}
            alt=""
            className="h-12 w-12 mr-2"
          />
          <span className="text-white font-bold text-xl">WORKAR</span>
        </Link>

        <div>
          <Link 
            to="/" 
            className={`text-white mr-10 ${location.pathname === '/' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            onClick={handleServicesClick} // Call the function when clicked
            className={`text-white mr-10 ${location.pathname === '/services' ? 'font-bold' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`text-white mr-10 ${location.pathname === '/about' ? 'font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-white mr-10 ${location.pathname === '/contact' ? 'font-bold' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/login" 
            className={`text-white mr-10 ${location.pathname === '/login' ? 'font-bold' : ''}`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
