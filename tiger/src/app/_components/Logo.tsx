import Image from "next/image";

const Logo = () => {
    return (
      <div className="flex items-center">
        <Image src="images/TigerMouthLogo.svg" alt="Logo" height={80} width={80} />
      </div>
    );
  };
  
  export default Logo;