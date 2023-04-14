import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="md:h-screen h-[300px] top-0 relative md:mt-[108px] mt-[55px]">
        <Image
          src={"/images/hero-banner2.png"}
          fill
          alt="hero-banner"
          className=" w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
