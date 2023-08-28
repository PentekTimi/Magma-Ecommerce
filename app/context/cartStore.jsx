"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartItems, setCartItems] = useState([
//         {
//         productID: '646f23e7121c97b032d0241c', 
//         productQuantity: 1, 
//         productPrice: 35, 
//         productModel: 'Iphone 14', 
//         productCategory: 'phone', 
//         productName: "Alyssa",
//         productImage: "https://storage.googleapis.com/magma-bucket/phone-case/alyssa_front.jpg"
// }
    ])

    return (
        <CartContext.Provider value={{cartItems, setCartItems, totalQty, setTotalQty, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)