import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className=" bg-primaryBg border-b border-secondaryText flex logo fixed w-full p-1">
        <Logo />
      </div>
    </header>
  );
};

export default Header;