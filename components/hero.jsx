import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div>
        <div className="md:h-[600px] h-[300px] top-0 relative">
          <Image src={"/images/hero.jpeg"} layout="fill" />
          <div className="absolute mt-40 ml-5 text-white md:text-[50px] text-[20px] lg:w-[30%] font-extrabold leading-none">
            <span>DESIGNED FOR THE FREEDOM TO WALK</span>
            <p className="text-[20px] font-extralight text-right mt-4 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              laboriosam quas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
