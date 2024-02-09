import Image from "next/image";

const Logo = () => {
    return (
      <div className="flex items-center">
        <Image src="images/TigerMouthLogo.svg" alt="Logo" height={50} width={50} />
      </div>
    );
  };
  
  export default Logo;