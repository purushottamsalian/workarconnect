import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Job = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [category, setCategory] = useState('');
  const [jobProfile, setJobProfile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, mobile, category, jobProfile };

    try {
      const response = await fetch('http://workarconnect-nx8y-buuvhf4ed-purushottamsalians-projects.vercel.app/job', {  // Update the endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send the form data to the backend
      });

      if (response.ok) {
        // Handle successful response
        const result = await response.json();
        setSuccessMessage('Profile submitted successfully!');
        setErrorMessage(''); // Clear any previous error messages
        console.log('Response:', result);
        navigate("/home")
      } else {
        // Handle error response
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || 'Failed to submit profile');
        setSuccessMessage(''); // Clear success message in case of error
      }
    } catch (error) {
      setErrorMessage('Error occurred while submitting. Please try again.');
      setSuccessMessage(''); // Clear success message in case of error
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen bg-gradient-to-br from-blue-900 to-blue-900 mt-[64px]"> {/* Adjust margin-top based on your navbar height */}
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: '1920px', height: '1080px' }} // Fixed dimensions set here
      >
        <h1 className="text-2xl font-bold mb-4 text-orange-400">Job Application</h1>
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
              type="text"
              placeholder="Enter 10 digit mobile no"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)} 
              className="max-w-md w-full p-2 border border-gray-900 rounded" // Set a max width
              required
            />
          </p>
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
            placeholder="Your Preferred Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="max-w-md w-full p-2 border border-gray-900 rounded h-12" // Set a max width and height
            required
          />
          <p>
          <textarea
            placeholder="Your Job Profile"
            value={jobProfile}
            onChange={(e) => setJobProfile(e.target.value)}
            className="max-w-md w-full p-2 border border-gray-900 rounded h-16" // Set a max width and height
            required
          />
          </p>
          <p>
            <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
              Send Your Profile
            </button>
          </p>
        </form>

        {/* Display success or error messages */}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Job;
