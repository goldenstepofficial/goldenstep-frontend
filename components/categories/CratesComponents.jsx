import React, { useState } from "react";
import Image from "next/image";
import { useStateContext } from "../../context/StateContext";
import MyHead from "../Head";
import AlsoLike from "../AlsoLike";

const CratesComponents = ({ props }) => {
  const {
    cartGif,
    heartGif,
    quantity,
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
        <div className="flex flex-col md:mx-10 md:mt-0 mt-8 overflow-y-scroll scrollbar">
          <h1 className="md:text-[40px] text-[24px] font-bold uppercase text-center">
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

export default CratesComponents;
