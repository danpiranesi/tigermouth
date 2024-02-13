import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Text from "./Text";

const Header = () => {
  return (
    <header>
      <div
        //className="border-b border-r-primaryText flex items-center justify-between fixed w-full p-1 animate-bg bg-gradient-to-r from-primaryBg via-tertiaryBg to-accentPrimary"
        className="border-b border-r-primaryText bg-primaryBg flex items-center justify-between fixed w-full p-1"
      >
        <div className="ml-1">
          <Logo />
        </div>
        <div className="Ct text-center font-bold text-2xl"><Text size="text-headerXS" className=" font-inter">TigerMouth</Text></div>
        <div className="mr-5 pt-2">
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;