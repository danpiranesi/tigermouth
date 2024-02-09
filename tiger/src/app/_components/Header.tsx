import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className=" bg-primaryBg flex logo fixed w-full p-2">
        <Logo />
      </div>
    </header>
  );
};

export default Header;