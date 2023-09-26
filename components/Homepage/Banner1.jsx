import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Banner1 = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center w-[90%] mx-auto my-20 gap-20">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="md:text-[60px] text-[40px] leading-tight font-extrabold">
            India&apos;s First Premium Wooden Sneaker Crates
          </h1>
          <p>
            Goldenstep proudly presents India&apos;s very first Wooden Sneaker
            Crates, handcrafted with care in India. Elevate your sneaker storage
            with style, premium quality, and unmatched durability.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-full"
            onClick={() => router.push("/crates")}
          >
            Shop Now
          </button>
        </div>
        <Image
          src={"/images/wooden-crates.jpg"}
          width={550}
          height={550}
          alt="Golden Step India's First Premium Wooden Sneaker Crates"
          className="rounded-xl"
        />
      </div>
    </>
  );
};

export default Banner1;
