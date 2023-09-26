import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Banner3 = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-2 items-center w-[90%] mx-auto my-40 gap-20">
        <Image
          src={"/images/all-in-one-kit.jpg"}
          width={550}
          height={550}
          alt="Golden Step India's First Premium Wooden Sneaker Crates"
          className="rounded-xl"
        />
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-[60px] leading-tight font-extrabold">
            Level Up Sneaker Maintenance With Sneaker Kits
          </h1>
          <p>
            Explore our curated collection of Goldenstep Kits, designed to
            simplify your sneaker care routine. From the perfect handy travel
            companion to all-in-one kits, discover convenience, quality, and
            care in every kit.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-full"
            onClick={() => router.push("/accessories")}
          >
            Check Out Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner3;
