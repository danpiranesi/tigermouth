import { use, useEffect, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popup", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("popup")) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);
  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex z-10 justify-center items-center bg-black bg-opacity-50">
          <div className="bg-primaryText p-8 rounded-lg w-full m-4 sm:max-w-lg">
            <div className="text-center">
              <h2 className="text-xl font-bold text-secondaryText">
                Welcome to TigerMouth 👋
              </h2>
              <p className="mb-5 italic text-secondaryText">
                An AI-powered service to enhance connection with Colorado
                College.
              </p>
            </div>
            <p className="text-secondaryText font-semibold">
              Important Information to Keep in Mind:
            </p>
            <ul className="list-disc">
              <li className="text-secondaryText">
                While TigerMouth strives to provide helpful and relevant
                information, it may not have access to the latest data or
                developments. Always double-check critical information from
                trusted sources.
              </li>
              <li className="text-secondaryText">
                Your interactions with TigerMouth may be recorded for training
                purposes. Your privacy is important to us, and your personal
                information will be handled in accordance with our privacy
                policy.
              </li>
            </ul>
            <div className="text-center">
              <button
                onClick={handleClose}
                className="mt-4 px-4 py-2 bg-accentPrimary text-primaryBg rounded hover:bg-tertiaryBg border border-primaryBg"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
