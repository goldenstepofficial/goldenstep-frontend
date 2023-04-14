import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";

const AccessoriesComponent = ({ props }) => {
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

  return (
    <>
      <div className="md:mt-40 mt-10 md:mx-5 md:grid md:grid-cols-2 text-black md:h-screen">
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
          <div className="flex flex-row items-center text-[17px] text-center w-full justify-center md:mt-5 mt-1">
            <span class="line-through pr-2">Rs {props.details.oldPrice}</span>
            <span className="text-[20px] text-center">Rs {props.price}/-</span>
          </div>

          <div className="grid grid-cols-2 gap-6 w-[80%] mx-auto justify-around md:mt-10 mt-8">
            <button
              className={`border p-2 rounded flex justify-center hover:bg-white transition duration-500 ease-in-out`}
              onClick={addItemToCart}
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
