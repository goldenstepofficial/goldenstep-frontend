import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BestSeller = ({ props }) => {
  const router = useRouter();

  const targetIds = [1, 19, 18, 23, 21, 17, 25, 20];

  const filteredItems = props?.filter((item) => targetIds.includes(item.id));

  return (
    <>
      <div className="items-center flex flex-col text-black">
        <div className="leading-none flex flex-col gap-4 items-center">
          <h1 className="text-[50px] font-extrabold text-center mt-10">
            Best Seller
          </h1>
          <p className="text-[18px] text-center font-light">
            Explore our top-rated and most-loved products. Discover what&apos;s
            trending and loved by sneaker enthusiasts like you.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-10 grid-cols-1 justify-center w-full px-10 mt-10">
          {filteredItems.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center h-[250px] shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out"
                onClick={() => router.push(`/products/${item.id}/${item.slug}`)}
                key={index}
              >
                <div className="h-[180px]">
                  <Image
                    src={item.thumbnail}
                    width={250}
                    height={150}
                    alt={item.name}
                  />
                </div>
                <div>
                  <p className="text-[16px]">{item.name}</p>
                  <div className="flex flex-row items-center text-center justify-center mt-2">
                    <span className="line-through pr-2 text-[14px]">
                      Rs {item.details.oldPrice}
                    </span>
                    <p className="font-bold rounded-lg text-black text-[16px]">
                      Rs {item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
