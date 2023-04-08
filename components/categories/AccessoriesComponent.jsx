import React from "react";
import Image from "next/image";
import { useState } from "react";

const AccessoriesComponent = ({ props }) => {
  const [cartGif, setCartGif] = useState(false);
  const [heartGif, setHeartGif] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const [selectedImage, setSelectedImage] = useState(props.thumbnail);

  const handleProductViewClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="md:mt-40 mt-10 md:mx-5 md:grid md:grid-cols-2 text-[#ebebeb] md:h-screen">
        <div>
          <div className="h-[280px] w-[70%] mx-auto flex items-center justify-center">
            <img
              src={selectedImage}
              width="400px"
              className="rounded max-h-full"
              alt="product-image"
            />
          </div>

          <div className="mt-2 mx-5 grid grid-cols-4 items-center gap-5">
            {props.images?.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleProductViewClick(image)}
              >
                <img
                  src={image}
                  width={100}
                  height={100}
                  alt="product-image"
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:mx-10 md:mt-0 mt-3 overflow-y-scroll scrollbar">
          <h1 className="md:text-[40px] text-[34px] uppercase text-center">
            {props.name}
          </h1>
          <span className="text-[25px] text-center ml-5 md:mt-5 mt-1">
            ₹{props.price}/-
          </span>

          <div className="flex flex-row items-center ml-5 md:mt-5 mt-2">
            <button
              onClick={handleDecrease}
              className="border rounded-l py-2 px-4 bg-[#3a3c3b]"
            >
              <span className="font-bold">-</span>
            </button>
            <span className="border-t border-b px-8 py-2 bg-[#3a3c3b]">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="border rounded-r py-2 px-4 bg-[#3a3c3b]"
            >
              <span className="font-bold">+</span>
            </button>
          </div>

          {props.variations.color1 && props.variations.color2 && (
            <div className="mt-5 md:mx-0 md:w-full w-[80%] mx-auto">
              <h1 className="text-center">Choose the Colors From Below:</h1>
              <div className="flex flex-row items-center w-full mt-2 justify-between space-x-4">
                <div className="flex flex-col">
                  <label htmlFor="color1" className="font-medium">
                    Color 1:
                  </label>
                  <select
                    id="color1"
                    name="color1"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 bg-[#3a3c3b] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {props.variations.color1.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="color2" className="font-medium">
                    Color 2:
                  </label>
                  <select
                    id="color2"
                    name="color2"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 bg-[#3a3c3b] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {props.variations.color2.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {props.variations.color && (
            <div className="mt-8 md:mx-0 md:w-full md:ml-5 w-[80%] mx-auto">
              <div className="flex flex-col">
                <h1 className="">Choose the Color From Below:</h1>
                <select
                  id="color1"
                  name="color1"
                  className="block pl-3 pr-10 py-2 mt-1 text-base border-gray-300 bg-[#3a3c3b] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md md:w-[30%] w-[90%]"
                >
                  {props.variations.color.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6 w-[80%] mx-auto justify-around md:mt-10 mt-8">
            <button
              className={`border p-2 rounded flex justify-center hover:bg-white transition duration-500 ease-in-out`}
              onMouseEnter={() => setCartGif(true)}
              onMouseLeave={() => setCartGif(false)}
            >
              {cartGif ? (
                <Image
                  src={"/images/cart-gif.gif"}
                  width={20}
                  height={20}
                  alt="cart-gif"
                />
              ) : (
                <span>Add to Cart</span>
              )}
            </button>
            <button
              className={`border p-2 rounded flex justify-center hover:bg-white transition duration-500 ease-in-out`}
              onMouseEnter={() => setHeartGif(true)}
              onMouseLeave={() => setHeartGif(false)}
            >
              {heartGif ? (
                <Image
                  src={"/images/heart-gif.gif"}
                  width={20}
                  height={20}
                  alt="heart-gif"
                />
              ) : (
                <span>Add to Wishlist</span>
              )}
            </button>
          </div>
          <div className="w-[80%] mx-auto mt-3 p-2 border rounded text-center bg-[#231F20] text-[#ebebeb] shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038] hover:border-none">
            Buy Now
          </div>

          <div className="mt-5 mx-8 md:mx-0 text-center md:text-left">
            <h1 className="text-[24px] font-extrabold">About the Product:</h1>
            <p className="mt-1 text-[14px]">{props.description}</p>
          </div>
        </div>
      </div>
      {/* <div>
                <h1 className='text-center text-[30px] mt-10'>You May Also Like</h1>
            </div> */}
    </>
  );
};

export default AccessoriesComponent;
