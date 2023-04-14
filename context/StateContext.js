import React, { createContext, useContext, useState, useEffect } from "react";
import Cart from "../components/Cart";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [cartId, setCartId] = useState('')
    const [showCart, setShowCart] = useState(false);
    const [cartGif, setCartGif] = useState(false);
    const [heartGif, setHeartGif] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('')
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const addItem = (productId) => {
        setCartGif(true);
        if (cartId === null) {
            var requestOptions = {
                method: "POST",
                redirect: "follow",
            };

            fetch("https://backend.goldenstep.in/store/carts/", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setCartGif(false);
                    const data = result;
                    localStorage.setItem("cartId", data.id);
                    addItemCart(productId);
                })
                .catch((error) => console.log("error", error));
        } else {
            addItemCart(productId);
        }
    };

    const addItemCart = (productId) => {
        setCartGif(true);
        var formdata = new FormData();
        formdata.append("product_id", productId);
        formdata.append("quantity", quantity);
        formdata.append("variations", JSON.stringify({ "color": color, "color1": color1, "color2": color2 }));


        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };

        fetch(
            `https://backend.goldenstep.in/store/carts/${cartId}/items/`,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                setCartGif(false);
                setShowCart(true);
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        setCartId(localStorage.getItem("cartId"));
        console.log("COLORS",color, color1, color2)
    }, []);

    return (
        <Context.Provider
            value={{
                showCart,
                cartGif,
                heartGif,
                quantity,
                color,
                color1,
                color2,
                setShowCart,
                setCartGif,
                setHeartGif,
                setQuantity,
                setColor,
                setColor1,
                setColor2,

                handleDecrease,
                handleIncrease,
                addItem
            }}
        >
            {showCart && <Cart />}
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
