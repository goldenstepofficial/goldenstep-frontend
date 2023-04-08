import React from "react";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const { setShowCart } = useStateContext();

  return (
    <>
      <div className="h-screen bg-white lg:w-[35%] md:w-[70%] w-[80%] absolute top-0 right-0">
        <div className="flex flex-row items-center justify-between mx-2 mt-2">
          This is Cart
          <button
            onClick={() => {
              setShowCart(false);
            }}
            className="text-[30px]"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
