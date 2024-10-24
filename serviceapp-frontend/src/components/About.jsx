import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-900 to-blue-900 mt-[64px]"> {/* Adjust the margin-top based on your navbar height */}
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: '1920px', height: '1080px' }} // Fixed dimensions set here
      >
        <h1 className="text-4xl font-bold mb-6 text-orange-400">About Us</h1>
        <p className="text-lg mb-4 text-gray-900">
          Welcome to our service platform, where your satisfaction is our priority. 
          We specialize in connecting you with expert professionals across a range of services, 
          from home cleaning and plumbing to electrical repairs
          and more. 
          Whether it’s a one-time fix or ongoing maintenance, our goal is to ensure the highest standards 
          of quality in everything we do.
        </p>
        <p className="text-lg mb-4 text-gray-900">
          Our team is committed to excellence, carefully selecting skilled service providers with proven expertise
          and a track record of customer satisfaction. 
          Each service is tailored to meet your specific needs, ensuring
          that your home or business receives the care and attention it deserves.
        </p>
        <p className="text-lg mb-4 text-gray-900">
          Our mission is to make your life easier by providing reliable, efficient, and trustworthy services at your
          fingertips. 
          Whether you need a quick repair, a thorough cleaning, or a major installation, we’re here to
          help. 
          Let us take care of the details, so you can focus on what matters most.
        </p>
        <p className="text-lg text-gray-900">
          Thank you for choosing us for your service needs. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
