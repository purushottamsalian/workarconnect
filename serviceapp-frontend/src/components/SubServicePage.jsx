import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from 'lucide-react';
import mv from '../assets/images/darshan.jpeg'

const SubServicePage = () => {
  const { subServiceId } = useParams(); // Get the sub-service ID from the URL
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
   const navigate = useNavigate()

  function handlePay(){
    navigate("/PaymentForm")
  }

  const serviceProviders = {
    11: [
      {
        id: 1,
        name: 'Sahil Sharma',
        image: '../assets/images/HOMELOGO1.png',
        contact: '9876543210',
        rate: '₹500 - ₹1000',
        experience: '5 years of experience in deep cleaning',
        timings: '9:00 AM - 6:00 PM',
        description: 'Sahil offers comprehensive deep cleaning services for homes and offices.',
        email: 'sahil@example.com',
      },
      {
        id: 2,
        name: 'Keith Brown',
        image: mv,
        contact: '8765432109',
        rate: '₹600 - ₹900',
        experience: '4 years of experience in deep cleaning',
        timings: '10:00 AM - 5:00 PM',
        description: 'Keith uses eco-friendly products for deep cleaning services.',
        email: 'keith@example.com',
      },
    ],
    12: [
      {
        id: 1,
        name: 'Rina Patel',
        image: mv,
        contact: '8765432111',
        rate: '₹400 - ₹800',
        experience: '3 years of experience in kitchen cleaning',
        timings: '8:00 AM - 4:00 PM',
        description: 'Rina specializes in modular kitchen deep cleaning services.',
        email: 'rina@example.com',
      },
    ],
    21: [
      {
        id: 1,
        name: 'Manoj Verma',
        image: mv,
        contact: '9988776655',
        rate: '₹700 - ₹1200',
        experience: '6 years of experience in electrical repair',
        timings: '10:00 AM - 7:00 PM',
        description: 'Manoj provides quick and reliable electrical repair services for homes.',
        email: 'manoj@example.com',
      },
    ],
    22: [
      {
        id: 1,
        name: 'John Doe',
        image: '../src/assets/images/ac.jpg',
        contact: '9988776644',
        rate: '₹300 - ₹700',
        experience: '4 years of experience in AC repair',
        timings: '11:00 AM - 8:00 PM',
        description: 'John is known for his fast and affordable AC repair services.',
        email: 'john@example.com',
      },
    ],
    31: [
      {
        id: 1,
        name: 'Suresh Naik',
        image: '../src/assets/images/ac.jpg',
        contact: '9123456789',
        rate: '₹1000 - ₹1500',
        experience: '10 years of plumbing experience',
        timings: '9:00 AM - 5:00 PM',
        description: 'Suresh specializes in fixing water leakage and pipe fittings.',
        email: 'suresh@example.com',
      },
    ],
    32: [
      {
        id: 1,
        name: 'Alex Johnson',
        image: 'src/assets/images/ac.jpg',
        contact: '8123456789',
        rate: '₹800 - ₹1200',
        experience: '5 years of plumbing experience',
        timings: '9:00 AM - 6:00 PM',
        description: 'Alex is known for efficient drain cleaning services.',
        email: 'alex@example.com',
      },
    ],
    41: [
      {
        id: 1,
        name: 'Ravi Gupta',
        image: mv,
        contact: '7896541230',
        rate: '₹500 - ₹700',
        experience: '7 years of experience in carpentry',
        timings: '8:00 AM - 6:00 PM',
        description: 'Ravi builds and repairs wooden furniture for homes and offices.',
        email: 'ravi@example.com',
      },
    ],
    42: [
      {
        id: 1,
        name: 'Mike Sanders',
        image: 'src/assets/images/ac.jpg',
        contact: '7896541231',
        rate: '₹600 - ₹900',
        experience: '3 years of experience in wooden flooring installation',
        timings: '10:00 AM - 4:00 PM',
        description: 'Mike specializes in wooden flooring installation and repair.',
        email: 'mike@example.com',
      },
    ],
    51: [
      {
        id: 1,
        name: 'Amrita Singh',
        image: 'src/assets/images/ac.jpg',
        contact: '7096543210',
        rate: '₹400 - ₹600',
        experience: '2 years of experience in painting',
        timings: '9:00 AM - 4:00 PM',
        description: 'Amrita provides interior painting services with modern color palettes.',
        email: 'amrita@example.com',
      },
    ],
    52: [
      {
        id: 1,
        name: 'Sahil Sharma',
        image: 'src/assets/images/ac.jpg',
        contact: '9876543210',
        rate: '₹500 - ₹1000',
        experience: '5 years of experience in deep cleaning',
        timings: '9:00 AM - 6:00 PM',
        description: 'Sahil offers comprehensive deep cleaning services for homes and offices.',
        email: 'sahil@example.com',
      },
      {
        id: 2,
        name: 'Keith Brown',
        image: 'src/assets/images/ac.jpg',
        contact: '8765432109',
        rate: '₹600 - ₹900',
        experience: '4 years of experience in deep cleaning',
        timings: '10:00 AM - 5:00 PM',
        description: 'Keith uses eco-friendly products for deep cleaning services.',
        email: 'keith@example.com',
      },
    ],
    53: [
      {
        id: 1,
        name: 'Rina Patel',
        image: 'src/assets/images/ac.jpg',
        contact: '8765432111',
        rate: '₹400 - ₹800',
        experience: '3 years of experience in kitchen cleaning',
        timings: '8:00 AM - 4:00 PM',
        description: 'Rina specializes in modular kitchen deep cleaning services.',
        email: 'rina@example.com',
      },
    ],
    61: [
      {
        id: 1,
        name: 'Manoj Verma',
        image: "../assets/images.Cooking.jpg",
        contact: '9988776655',
        rate: '₹700 - ₹1200',
        experience: '6 years of experience in electrical repair',
        timings: '10:00 AM - 7:00 PM',
        description: 'Manoj provides quick and reliable electrical repair services for homes.',
        email: 'manoj@example.com',
      },
    ],
    62: [
      {
        id: 1,
        name: 'John Doe',
        image: 'src/assets/images/ac.jpg',
        contact: '9988776644',
        rate: '₹300 - ₹700',
        experience: '4 years of experience in AC repair',
        timings: '11:00 AM - 8:00 PM',
        description: 'John is known for his fast and affordable AC repair services.',
        email: 'john@example.com',
      },
    ],
    63: [
      {
        id: 1,
        name: 'Suresh Naik',
        image: 'src/assets/images/ac.jpg',
        contact: '9123456789',
        rate: '₹1000 - ₹1500',
        experience: '10 years of plumbing experience',
        timings: '9:00 AM - 5:00 PM',
        description: 'Suresh specializes in fixing water leakage and pipe fittings.',
        email: 'suresh@example.com',
      },
    ],
    71: [
      {
        id: 1,
        name: 'Alex Johnson',
        image: 'src/assets/images/ac.jpg',
        contact: '8123456789',
        rate: '₹800 - ₹1200',
        experience: '5 years of plumbing experience',
        timings: '9:00 AM - 6:00 PM',
        description: 'Alex is known for efficient drain cleaning services.',
        email: 'alex@example.com',
      },
    ],
    72: [
      {
        id: 1,
        name: 'Ravi Gupta',
        image: 'src/assets/images/ac.jpg',
        contact: '7896541230',
        rate: '₹500 - ₹700',
        experience: '7 years of experience in carpentry',
        timings: '8:00 AM - 6:00 PM',
        description: 'Ravi builds and repairs wooden furniture for homes and offices.',
        email: 'ravi@example.com',
      },
    ],
    73: [
      {
        id: 1,
        name: 'Mike Sanders',
        image: 'src/assets/images/ac.jpg',
        contact: '7896541231',
        rate: '₹600 - ₹900',
        experience: '3 years of experience in wooden flooring installation',
        timings: '10:00 AM - 4:00 PM',
        description: 'Mike specializes in wooden flooring installation and repair.',
        email: 'mike@example.com',
      },
    ],
    81: [
      {
        id: 1,
        name: 'Amrita Singh',
        image: 'src/assets/images/ac.jpg',
        contact: '7096543210',
        rate: '₹400 - ₹600',
        experience: '2 years of experience in painting',
        timings: '9:00 AM - 4:00 PM',
        description: 'Amrita provides interior painting services with modern color palettes.',
        email: 'amrita@example.com',
      },
    ],
    82: [
      {
        id: 1,
        name: 'Sahil Sharma',
        image: 'src/assets/images/ac.jpg',
        contact: '9876543210',
        rate: '₹500 - ₹1000',
        experience: '5 years of experience in deep cleaning',
        timings: '9:00 AM - 6:00 PM',
        description: 'Sahil offers comprehensive deep cleaning services for homes and offices.',
        email: 'sahil@example.com',
      },
      {
        id: 2,
        name: 'Keith Brown',
        image: 'src/assets/images/ac.jpg',
        contact: '8765432109',
        rate: '₹600 - ₹900',
        experience: '4 years of experience in deep cleaning',
        timings: '10:00 AM - 5:00 PM',
        description: 'Keith uses eco-friendly products for deep cleaning services.',
        email: 'keith@example.com',
      },
    ],
    83: [
      {
        id: 1,
        name: 'Rina Patel',
        image: 'src/assets/images/ac.jpg',
        contact: '8765432111',
        rate: '₹400 - ₹800',
        experience: '3 years of experience in kitchen cleaning',
        timings: '8:00 AM - 4:00 PM',
        description: 'Rina specializes in modular kitchen deep cleaning services.',
        email: 'rina@example.com',
      },
    ],
    91: [
      {
        id: 1,
        name: 'Manoj Verma',
        image: 'src/assets/images/ac.jpg',
        contact: '9988776655',
        rate: '₹700 - ₹1200',
        experience: '6 years of experience in electrical repair',
        timings: '10:00 AM - 7:00 PM',
        description: 'Manoj provides quick and reliable electrical repair services for homes.',
        email: 'manoj@example.com',
      },
    ],
    92: [
      {
        id: 1,
        name: 'John Doe',
        image: 'src/assets/images/ac.jpg',
        contact: '9988776644',
        rate: '₹300 - ₹700',
        experience: '4 years of experience in AC repair',
        timings: '11:00 AM - 8:00 PM',
        description: 'John is known for his fast and affordable AC repair services.',
        email: 'john@example.com',
      },
    ],
    93: [
      {
        id: 1,
        name: 'Suresh Naik',
        image: 'src/assets/images/ac.jpg',
        contact: '9123456789',
        rate: '₹1000 - ₹1500',
        experience: '10 years of plumbing experience',
        timings: '9:00 AM - 5:00 PM',
        description: 'Suresh specializes in fixing water leakage and pipe fittings.',
        email: 'suresh@example.com',
      },
    ],
  };


  // Dynamic title based on sub-service ID
  const subServiceTitles = {
    11: 'Deep Cleaning',
    12: 'Kitchen Cleaning',
    21: 'Electrical Repair',
    22: 'AC Repair',
    31: 'Water Leakage',
    32: 'Drain Cleaning',
    41: 'Furniture Repair',
    42: 'Wooden Flooring',
    43: 'Home Painting',
    51: 'Rodent Control',
    52: 'Deep Cleaning',
    53: 'Kitchen Cleaning',
    61: 'Electrical Repair',
    62: 'AC Repair',
    63: 'Water Leakage',
    71: 'Drain Cleaning',
    72: 'Furniture Repair',
    73: 'Wooden Flooring',
    81: 'Home Painting',
    82: 'Rodent Control',
    83: 'Drain Cleaning',
    91: 'Furniture Repair',
    92: 'Wooden Flooring',
    93: 'Home Painting',
  };
   
  const handleShowDetails = (provider) => {
    setSelectedProvider(provider);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
    setSelectedProvider(null);
  };

  const providers = serviceProviders[subServiceId] || [];
  console.log(providers)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-400 flex items-center justify-center" style={{ width: '1920px', height: '1080px' }}>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">
          {subServiceTitles[subServiceId] || 'Service Providers'}
        </h1>

        {showDetails && selectedProvider ? (
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <img
              src={selectedProvider.image}
              alt={selectedProvider.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-center mb-4">{selectedProvider.name}</h2>
            <p className="text-center mb-2">{selectedProvider.description}</p>
            <p className="text-center mb-2"><strong>Rate:</strong> {selectedProvider.rate}</p>
            <p className="text-center mb-2"><strong>Experience:</strong> {selectedProvider.experience}</p>
            <p className="text-center mb-2"><strong>Contact:</strong> {selectedProvider.contact}</p>
            <p className="text-center mb-4"><strong>Email:</strong> {selectedProvider.email}</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.open(`tel:${selectedProvider.contact}`)}
              >
                Contact & Book
              </button>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded" onClick={handlePay}>
                Book & Pay Online
              </button>
            </div>
            <button
              className="block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 mx-auto"
              onClick={handleHideDetails}
            >
              Go Back
            </button>
          </div>
        ) : (
          <div>
            {providers.length > 0 ? (
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {providers.map((provider) => (
                  
                  <div
                    key={provider.id}
                    className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-red-400 hover:to-yellow-400 transition duration-300"
                    onClick={() => handleShowDetails(provider)}
                  >
                    <img
                      src={`${provider.image}`}
                      alt={provider.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />

                    {console.log(provider.image)}
                    <h2 className="text-2xl font-bold text-white text-center">{provider.name}</h2>
                    <p className="text-gray-300 text-center mb-2">{provider.description}</p>
                    <p className="text-gray-400 text-center"><strong>Rate:</strong> {provider.rate}</p>
                    <p className="text-gray-400 text-center"><strong>Contact:</strong> {provider.contact}</p>
                    <p className="text-gray-400 text-center"><strong>Experience:</strong> {provider.experience}</p>
                    <p className="text-gray-400 text-center"><strong>Timings:</strong> {provider.timings}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-500 text-center">No service providers available for this sub-service. Please check back later!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubServicePage;
