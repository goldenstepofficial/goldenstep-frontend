import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="md:h-[600px] h-[300px] top-0 relative md:mt-32 mt-12">
        <Image src={"/images/hero.jpeg"} fill alt="hero-banner" />
        {/* <div className="absolute mt-40 ml-5 text-[#ebebeb] md:text-[50px] text-[20px] lg:w-[30%] font-extrabold leading-none">
            <span>DESIGNED FOR THE FREEDOM TO WALK</span>
            <p className="text-[20px] font-extralight text-right mt-4 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              laboriosam quas
            </p>
          </div> */}
        <div className="absolute bottom-0 text-[#fab028] bg-[#ebebeb] w-full md:pt-4 text-[20px] md:text-[40px] text-center">
          <h1>
            {" "}
            --{">"} Flat 15% Off on all Products {"<"}--{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
