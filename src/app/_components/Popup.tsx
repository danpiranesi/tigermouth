import { useState } from 'react';
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex z-10 justify-center items-center bg-black bg-opacity-50">
          <div className="bg-primaryText p-8 rounded-lg">
            <h2 className="text-xl font-bold text-secondaryText">Welcome to TigerMouth 👋</h2>
            <p className="mb-5 text-secondaryText">An AI enabled service to encourge frictionless connection to everything Colorado College.</p>
            <p className="text-secondaryText font-semibold">A Few Disclaimers Before We Begin:</p>
            <p className="text-secondaryText">- TigerMouth can make mistakes; it is worth checking any information it provides.</p>
            <p className="text-secondaryText">- TigerMouth may hold opinions; do not take anything it says as absolute fact</p>
            <button onClick={handleClose} className="mt-4 px-4 py-2 bg-accentPrimary text-primaryBg rounded hover:bg-tertiaryBg border border-primaryBg">
                <ArrowRightIcon className="w-6 h-6"/>
                </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;