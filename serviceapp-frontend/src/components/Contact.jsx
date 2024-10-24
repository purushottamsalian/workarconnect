import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic
    console.log('Submitted:', { name, email, message });
    
    // Optionally clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNavi = () => {
    navigate('/job'); // Navigate to the correct route for Job component
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen bg-gradient-to-br from-blue-900 to-blue-900 mt-[64px]">
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: '1920px', height: '1080px' }} // Fixed dimensions set here
      >
        <h1 className="text-2xl font-bold mb-4 text-orange-400">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-md w-full p-2 border border-gray-900 rounded" // Set a max width
            required
          />
          <p>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md w-full p-2 border border-gray-900 rounded" // Set a max width
              required
            />
          </p>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="max-w-md w-full p-2 border border-gray-900 rounded h-24" // Set a max width
            required
          />
          <p>
            <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded">
              Send Message
            </button>
          </p>
        </form>

        {/* Additional Contact Information */}
        <div className="mt-6 text-gray-900 text-left">
          <p className="mb-2">
            <strong>Contact Number:</strong> +91-9000000001
          </p>
          <p className="flex items-center justify-start space-x-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/11234567890" // WhatsApp link with phone number
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>
          <p className="mt-2">
            <a
              href="mailto:info@workar.com" // Replace with your email
              className="text-white hover:underline"
            >
              info@workar.com
            </a>
          </p>
        </div>
        <p className="text-lg text-center text-gray-600 ms-100 fixed">
          Want to become a <a href="#" onClick={handleNavi} className="text-blue-600 hover:underline">Service Provider?</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

