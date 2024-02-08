import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="bg-white flex logo fixed w-full p-2">
        <Logo />
      </div>
    </header>
  );
};

export default Header;