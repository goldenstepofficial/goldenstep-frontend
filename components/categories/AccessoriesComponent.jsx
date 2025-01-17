import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import MyHead from "../Head";
import AlsoLike from "../AlsoLike";

const AccessoriesComponent = ({ props }) => {
  const {
    cartGif,
    heartGif,
    quantity,
    setColor,
    setColor1,
    setColor2,
    handleDecrease,
    handleIncrease,
    addItem,
  } = useStateContext();

  const [selectedImage, setSelectedImage] = useState(props.thumbnail);

  const handleProductViewClick = (image) => {
    setSelectedImage(image);
  };

  const addItemToCart = () => {
    addItem(props.id);
  };

  const formattedDescription = props.description.replace(/\n/g, "<br>");

  const handlePrevClick = () => {
    const currentIndex = props.images.indexOf(selectedImage);
    const prevIndex =
      currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
    setSelectedImage(props.images[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = props.images.indexOf(selectedImage);
    const nextIndex =
      currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(props.images[nextIndex]);
  };

  return (
    <>
      <MyHead
        title={`${props.name} - Goldenstep`}
        description="This is the homepage"
      />
      <div className="md:mt-40 mt-10 md:mx-5 md:grid md:grid-cols-2 text-black md:h-screen">
        <div>
          <div className="h-[280px] w-[70%] mx-auto flex items-center justify-center relative">
            <Image
              src={selectedImage}
              width={400}
              height={200}
              className="rounded max-h-full"
              alt={props.name}
              priority
            />
            <button
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={handlePrevClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={handleNextClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-2 mx-5 grid grid-cols-4 items-center gap-5">
            {props.images?.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleProductViewClick(image)}
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={props.name}
                  className={`rounded ${
                    selectedImage === image ? "border-2 border-[#3a3a3a]" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:mx-10 md:mt-0 mt-3 overflow-y-scroll scrollbar">
          <h1 className="md:text-[40px] text-[34px] uppercase text-center">
            {props.name}
          </h1>
          <div className="flex flex-row items-center text-[17px] text-center w-full justify-center md:mt-5 mt-1">
            <span className="line-through pr-2">
              Rs {props.details.oldPrice}
            </span>
            <span className="text-[20px] text-center">Rs {props.price}/-</span>
          </div>

          <div
            className="w-[80%] mx-auto mt-3 p-2 border rounded text-center bg-[#231F20] text-[#ebebeb] shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:border-none"
            onClick={addItemToCart}
          >
            Add to Cart
          </div>

          <div className="flex flex-col ml-5 md:mt-5 mt-2">
            <h1>Quantity:</h1>
            <div className="flex flex-row items-center">
              <button
                onClick={handleDecrease}
                className="border rounded-l py-2 px-4"
              >
                <span className="font-bold">-</span>
              </button>
              <span className="border-t border-b px-8 py-2">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="border rounded-r py-2 px-4"
              >
                <span className="font-bold">+</span>
              </button>
            </div>
          </div>

          {props.variations.color && (
            <div className="mt-8 md:mx-0 md:w-full md:ml-5 w-[80%] mx-auto">
              <div className="flex flex-col items-center">
                <h1>Choose the Surface Mat Color:</h1>
                <select
                  id="color1"
                  name="color1"
                  className="block border pl-3 pr-10 py-2 mt-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md md:w-[30%] w-[90%]"
                >
                  {props.variations.color.map((color) => (
                    <option
                      key={color}
                      value={color}
                      onClick={() => setColor(color)}
                    >
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {props.variations.color1 && props.variations.color2 && (
            <div className="mt-8 md:w-[93%] w-[80%] mx-auto">
              <h1>Choose the Towel Colors:</h1>
              <div className="flex flex-row items-center w-full mt-2 justify-between space-x-4">
                <div className="flex flex-col">
                  <label htmlFor="color1" className="font-medium">
                    Color 1:
                  </label>
                  <select
                    id="color1"
                    name="color1"
                    className="block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {props.variations.color1.map((color1) => (
                      <option
                        key={color1}
                        value={color1}
                        onClick={() => setColor1(color1)}
                      >
                        {color1}
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
                    className="block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {props.variations.color2.map((color2) => (
                      <option
                        key={color2}
                        value={color2}
                        onClick={() => setColor2(color2)}
                      >
                        {color2}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 mx-8 md:mx-0 text-center md:text-left">
            <h1 className="text-[24px] font-extrabold">About the Product:</h1>
            <p
              className="mt-1 text-[14px]"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[30px] mt-10">You May Also Like</h1>
        <AlsoLike id={props.id} />
      </div>
    </>
  );
};

export default AccessoriesComponent;
