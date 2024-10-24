import React from 'react';

const ServiceCard = ({ service, selectedService, onSelect }) => {
  const isSelected = selectedService && selectedService.id === service.id;

  return (
    <div
      onClick={onSelect}
      className={`p-4 border rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
        isSelected ? 'bg-red-600 text-white' : 'bg-white'
      }`}
    >
      <div className="text-3xl mb-2 text-center">{service.icon}</div>
      <h2 className="text-xl font-semibold text-center">{service.name}</h2>
      <p className="text-gray-600 text-center">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
