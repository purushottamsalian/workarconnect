import React from 'react'; // Ensure this is the only React import
import { FaRegLifeRing } from 'react-icons/fa'; // Support icon

const SupportIcon = () => {
  return (
    <a 
      href="mailto:support@workar.com" 
      className="fixed bottom-24 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
    >
      <FaRegLifeRing className="text-xl" />
    </a>
  );
};

export default SupportIcon;
