import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const AlsoLike = ({ id }) => {
  const [products, setProducts] = useState();

  const getProducts = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://backend.goldenstep.in/store/products/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  // filter out the product with the ID passed as a prop
  const filteredProducts = products?.filter((product) => product.id !== id);

  return (
    <>
      <div className="items-center flex flex-col text-black">
        <div className="grid md:grid-cols-1 my-2 grid-cols-1 justify-center w-full mx-3">
          <div className="overflow-x-scroll scrollbar whitespace-nowrap py-4 px-10">
            {filteredProducts?.map((item, index) => {
              return (
                <div
                  className="inline-block w-[250px] h-[250px] mr-10 shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out"
                  onClick={() =>
                    router.push(`/products/${item.id}/${item.slug}`)
                  }
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
                    <p className="text-[16px] text-center">{item.name}</p>
                    <p className="font-bold mx-auto w-fit px-2 mt-1 rounded-lg text-black md:text-[16px] text-[14px] pt-1">
                      Rs {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlsoLike;
