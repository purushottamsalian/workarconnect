import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Client-side validation to ensure passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Sign-up attempted with:', { username, email, password, confirmPassword });

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }), // Ensure only actual state values are being sent
      });

      if (response.ok) {
        // Handle successful signup
        setSuccess(true);
      } else {
        // Handle errors from the response
        const errorData = await response.json();
        alert("User already registered please login")
        navigate('/login')
        setError(errorData.message || "Failed to sign up.");
      }
    } catch (err) {
      // Handle network errors or unexpected issues
      console.log(err)
      setError("Something went wrong. Please try again.",err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="w-full max-w-sm p-6 space-y-4 bg-white rounded-lg shadow-lg lg:p-8 mt-10 mb-10">
        <h2 className="text-3xl font-bold text-center text-orange-500">Sign Up</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success ? (
          <p className="text-green-600 text-center">Signup successful! You can now log in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </form>
        )}
        <p className="text-base text-center text-gray-600">
          Already have an account? <a href="#" className="text-blue-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
