import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ServiceForm = ({ selectedService, name, setName, email, setEmail, description, setDescription, handleSubmit }) => {
  return (
    <div className="bg-black shadow-xl rounded-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        Request {selectedService.name} Service
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Service Description</label>
          <textarea
            id="description"
            placeholder="Please describe your service need in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border border-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
};

// Add prop types validation
ServiceForm.propTypes = {
  selectedService: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ServiceForm;
