import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServiceProviderPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0); // Track current testimonial
  const navigate = useNavigate();

  // List of services with sub-services and images
  const services = [
    {
      id: 1,
      name: "Cleaning",
      description: "Professional home cleaning services",
      image: 'src/assets/images/cleaning.jpg',
      subServices: [
        { id: 11, name: "Deep Cleaning", description: "Thorough cleaning of entire house" },
        { id: 12, name: "Kitchen Cleaning", description: "Detailed kitchen cleaning services" },
        { id: 13, name: "Carpet Cleaning", description: "Professional carpet cleaning" },
      ],
    },
    {
      id: 2,
      name: "Plumbing",
      description: "Expert plumbing services",
      image: "src/assets/images/plumbing.jpg",
      subServices: [
        { id: 21, name: "Leak Repair", description: "Fix leaking pipes and faucets" },
        { id: 22, name: "Pipe Installation", description: "Install new plumbing pipes" },
        { id: 23, name: "Drain Cleaning", description: "Clear clogged drains" },
      ],
    },
    {
      id: 3,
      name: "Electrical",
      description: "Quality electrical services",
      image: "src/assets/images/electrical.jpg",
      subServices: [
        { id: 31, name: "Wiring", description: "Install new wiring systems" },
        { id: 32, name: "Lighting", description: "Install new lighting fixtures" },
        { id: 33, name: "Electrical Repair", description: "Fix electrical issues" },
      ],
    },
    {
      id: 4,
      name: "Gardening",
      description: "Expert gardening services",
      image: "src/assets/images/gardening.jpg",
      subServices: [
        { id: 41, name: "Lawn Mowing", description: "Professional lawn mowing services" },
        { id: 42, name: "Plant Pruning", description: "Trimming and pruning of plants and shrubs" },
        { id: 43, name: "Garden Design", description: "Custom garden design and landscaping" },
      ],
    },
    {
      id: 5,
      name: "Pest Control",
      description: "Reliable pest control services",
      image: "src/assets/images/pest.jpg",
      subServices: [
        { id: 51, name: "Termite Control", description: "Effective termite extermination" },
        { id: 52, name: "Rodent Control", description: "Rodent trapping and removal" },
        { id: 53, name: "Insect Control", description: "Management of insect infestations" },
      ],
    },
    {
      id: 6,
      name: "Painting",
      description: "Professional painting services",
      image: "src/assets/images/painting.jpg",
      subServices: [
        { id: 61, name: "Interior Painting", description: "Interior wall painting services" },
        { id: 62, name: "Exterior Painting", description: "Durable exterior painting services" },
        { id: 63, name: "Custom Designs", description: "Custom wall designs and textures" },
      ],
    },
    {
      id: 7,
      name: "Carpentry",
      description: "Quality carpentry services",
      image: "src/assets/images/carpentry.jpg",
      subServices: [
        { id: 71, name: "Furniture Repair", description: "Repair and restore furniture" },
        { id: 72, name: "Custom Woodwork", description: "Tailored woodwork solutions" },
        { id: 73, name: "Cabinet Installation", description: "Install and repair cabinets" },
      ],
    },
    {
      id: 8,
      name: "AC Repair",
      description: "Reliable AC repair services",
      image: "src/assets/images/ac.jpg",
      subServices: [
        { id: 81, name: "AC Installation", description: "Install new air conditioning units" },
        { id: 82, name: "AC Maintenance", description: "Routine maintenance and servicing" },
        { id: 83, name: "Cooling Issues", description: "Diagnose and fix cooling problems" },
      ],
    },
    {
      id: 9,
      name: "Home Cooking",
      description: "The Food We All Have Been Waiting For",
      image: "src/assets/images/Cooking.jpg",
      subServices: [
        { id: 91, name: "Daily Cooking", description: "Decorative lighting for events" },
        { id: 92, name: "Monthly Booking", description: "Installation of smart lighting systems" },
        { id: 93, name: "Party Orders", description: "Enhance outdoor spaces with lighting" },
      ],
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Shubham",
      imageUrl: "src/assets/images/sand.jpeg",
      feedback: "Workar Connect provided exceptional service! My home has never been cleaner, and the professionals were friendly and efficient.",
      date: "October 12, 2024",
    },
    {
      id: 2,
      name: "John Smith",
      imageUrl: "src/assets/images/punit.jpeg",
      feedback: "I was very impressed with the punctuality and professionalism of the service providers. Highly recommend Workar Connect!",
      date: "October 5, 2024",
    },
    {
      id: 3,
      name: "Emily Johnson",
      imageUrl: "src/assets/images/avijit.jpeg",
      feedback: "The cleaning team went above and beyond. The attention to detail was fantastic, and they were very courteous.",
      date: "September 30, 2024",
    },
  ];

  // Rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval); // Clean up on component unmount
  }, [testimonials.length]);

  // Navigate to sub-service details page
  const handleSubServiceClick = (subServiceId) => {
    navigate(`/sub-service/${subServiceId}`); // Navigate to the sub-service page
  };

  // Set selected service when clicked
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-900 pt-16 pb-24 flex">
      {/* Left Side: Testimonials */}
      <div className="w-1/3 p-8 flex flex-col justify-center mt-20">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-25">Client Testimonials</h2>
        <div className="relative">
          <div className="bg-white p-24 rounded-md shadow-lg text-center transition-all duration-3000">
            <img
              src={testimonials[currentTestimonial].imageUrl}
              alt={testimonials[currentTestimonial].name}
              className="object-cover h-24 w-24 rounded-full mb-6 mx-auto"
            />
            <h3 className="text-black font-bold mb-4">{testimonials[currentTestimonial].name}</h3>
            <p className="text-gray-600 italic text-lg mb-4">"{testimonials[currentTestimonial].feedback}"</p>
            <p className="text-gray-500">{testimonials[currentTestimonial].date}</p>
          </div>
        </div>
      </div>

      {/* Right Side: Services */}
      <div className="w-2/3 p-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-400">Our Premium Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-blue-200 rounded-md shadow-md text-center p-4 cursor-pointer"
              onClick={() => handleServiceClick(service)} // Set selected service on click
            >
              <img
                src={service.image}
                alt={service.name}
                className="object-cover h-16 w-16 rounded-full mb-4 mx-auto"
              />
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 bg-blue-600 mb-4 p-4 rounded-md">
              Choose a {selectedService.name} Sub-Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedService.subServices.map((subService) => (
                <div
                  key={subService.id}
                  onClick={() => handleSubServiceClick(subService.id)} // Navigate on click
                  className="p-4 bg-blue-400 rounded shadow-md text-center cursor-pointer hover:bg-blue-500 transition duration-200"
                >
                  <h3 className="text-xl font-semibold">{subService.name}</h3>
                  <p className="text-gray-600">{subService.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderPage;
