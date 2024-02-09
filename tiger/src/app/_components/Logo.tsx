import Image from "next/image";

const Logo = () => {
    return (
      <div className="flex items-center">
        <Image src="images/TigerMouthLogo.svg" alt="Logo" height={60} width={60} />
      </div>
    );
  };
  
  export default Logo;