import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Banner2 = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-2 items-center w-[90%] mx-auto my-40 gap-20">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-[60px] leading-tight font-extrabold">
            Ultimate Sneaker Care Essentials Collection
          </h1>
          <p>
            Discover the ultimate collection of sneaker care essentials at
            Goldenstep. From our Microfiber Towels to specialized SPF protection
            and Premium Brushes, we&apos;ve got everything you need to keep your
            sneakers looking their best.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-full"
            onClick={() => router.push("/accessories")}
          >
            Check Out Now
          </button>
        </div>
        <Image
          src={"/images/towel.jpg"}
          width={550}
          height={550}
          alt="Golden Step India's First Premium Wooden Sneaker Crates"
          className="rounded-xl"
        />
      </div>
    </>
  );
};

export default Banner2;
