import React, { useState } from 'react';

const Popup = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setIsOpen(false); // Close the current popup
    onNext(); // Call the onNext function to open the next popup
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Welcome to Our Website!</h2>
            <p>This is a popup message.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNext}>
              Next
            </button>
            <button className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 ml-2" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;