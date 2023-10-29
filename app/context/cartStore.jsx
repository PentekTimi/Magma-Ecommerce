"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartItems, setCartItems] = useState([
    ])

    return (
        <CartContext.Provider value={{cartItems, setCartItems, totalQty, setTotalQty, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)