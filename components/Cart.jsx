import React from "react";
import { useStateContext } from "../context/StateContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const { setShowCart, handleDecrease, handleIncrease } = useStateContext();

  const router = useRouter();

  const [cartId, setCartId] = useState("");
  const [cartDetails, setCartDetails] = useState({});
  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const getCartItems = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://backend.goldenstep.in/store/carts/" + cartId, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        try {
          return response.json();
        } catch (error) {
          console.log("Error parsing JSON:", error);
          throw new Error("Error parsing JSON");
        }
      })

      .then((result) => {
        const data = result;
        console.log(data);
        setCartDetails(data);
        setCartData(data.items);
        setCartLength(data.items.length);
      })
      .catch((error) => console.log("error", error));
  };

  const deleteItem = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      `https://backend.goldenstep.in/store/carts/${cartId}/items/${id}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        try {
          return response.json();
        } catch (error) {
          console.log("Error parsing JSON:", error);
          throw new Error("Error parsing JSON");
        }
      })

      .then((result) => {
        console.log(result);
        console.log("Deleted");
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setCartId(localStorage.getItem("cartId"));
  }, []);

  useEffect(() => {
    if (cartId && cartId.length > 0) {
      getCartItems();
    }
  }, [cartId]);

  return (
    <>
      <div className="h-screen bg-white lg:w-[35%] md:w-[80%] w-full absolute top-0 right-0 overflow-y-scroll scrollbar">
        <div className="flex flex-row items-center justify-between mx-2 mt-2">
          Cart ({cartLength})
          <button
            onClick={() => {
              setShowCart(false);
            }}
            className="text-[30px]"
          >
            x
          </button>
        </div>
        <div className="mt-4 pb-32">
          {cartData.map((data, index) => (
            <>
              <div
                className="flex flex-row justify-between border-y mb-2 py-5 px-2"
                key={index}
              >
                <img
                  src={data.product.image}
                  alt="product-image"
                  className="h-28 w-32 rounded-lg mr-2"
                />
                <div className="flex flex-col items-center mr-2">
                  <h1 className="text-center">{data.product.name}</h1>
                  <div className="flex flex-row items-center md:mt-5 mt-2">
                    Quantity:{" "}
                    <span className="border-t border-b px-4 py-1">
                      {data.quantity}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <button onClick={() => deleteItem(data.id)}>
                    <img
                      src="/images/delete.png"
                      alt="delete-item"
                      className="h-5"
                    />
                  </button>
                  <p className="text-[14px] mt-4">Rs. {data.sub_total_price}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="fixed bottom-0 bg-gray-200 md:w-[35%] w-full py-5 text-center">
          <h1 className="text-[20px] mb-2">
            Subtotal: Rs. {cartDetails.total_price}
          </h1>
          <button
            className="bg-[#171717] w-[80%] mx-auto py-2 text-white text-[22px] rounded-lg"
            onClick={() => router.push(`/checkout/${cartId}`)}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
