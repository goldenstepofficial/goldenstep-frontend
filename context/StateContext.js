import React, { createContext, useContext, useState, useEffect } from "react";
import Cart from "../components/Cart";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
            }}
        >
            {showCart && <Cart />}
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
