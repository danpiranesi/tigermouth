import React, { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [popupStep, setPopupStep] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setPopupStep(popupStep + 1); // Move to the next step
  };

  const handleReset = () => {
    setPopupStep(0); // Reset the popup sequence
    setIsOpen(true); // Open the first popup
  };

  // Define the content of each step based on the popupStep
  let content = null;
  switch (popupStep) {
    case 0:
      content = (
        <>
          <h2 className="text-xl font-bold mb-4">Welcome to TigerMouth!</h2>
          <p>a service to make CC easier</p>
        </>
      );
      break;
    case 1:
      content = (
        <>
          <h2 className="text-xl font-bold mb-4">Second Popup</h2>
          <p>This is the second popup content.</p>
        </>
      );
      break;
    // Add more cases for additional steps in the sequence
    default:
      content = (
        <>
          <h2 className="text-xl font-bold mb-4">End of Sequence</h2>
          <button onClick={handleReset}>Restart Sequence</button>
        </>
      );
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-8 rounded-lg text-center">
            {content}
            {popupStep !== 2 && ( // Ensure 'Next' button is not rendered on last step
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNext}>
                Next
              </button>
            )}
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