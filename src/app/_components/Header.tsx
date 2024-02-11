import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-b border-r-primaryText flex items-center justify-between fixed w-full p-1 animate-gradient">
        <div className="ml-1">
          <Logo />
        </div>
        <div className="mr-5">
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;