import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="bg-primaryBg logo mb-[-5] z-10">
        <Logo />
      </div>
    </header>
  );
};

export default Header;