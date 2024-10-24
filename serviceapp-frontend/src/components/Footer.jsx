import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa'; // Importing the icons

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4 fixed bottom-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} WORKAR. All rights reserved.Follow us on social media!</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/yourcompany" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://wa.me/11234567890" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
          <a
            href="https://twitter.com/yourcompany" // Replace with your Twitter link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
