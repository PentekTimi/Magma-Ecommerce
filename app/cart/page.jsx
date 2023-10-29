"use client"
import DesktopCartItems from "@/components/cart/DesktopCartItems"
import MobileCartItems from "@/components/cart/MobileCartItems"
import { useMediaQuery } from "react-responsive"
import CartStyles from "../../components/cart/cart.module.css"
import { useCartContext } from "../context/cartStore"
import ClientOnly from "@/components/common/ClientOnly"
import EmptyCart from "@/components/cart/EmptyCart"
import getStripe from "@/lib/getStripe"
import toast from "react-hot-toast"


export default function Cart() {

    const {cartItems, totalPrice, setTotalQty, setTotalPrice} = useCartContext()
    
    const desktopView = useMediaQuery({
        query: "(min-width: 992px)"
    })

    function decreaseQty(indexOfItem) {
        if (cartItems[indexOfItem].productQuantity > 1) {
            cartItems[indexOfItem].productQuantity = cartItems[indexOfItem].productQuantity - 1
            setTotalQty(prevValue => prevValue - 1)
            setTotalPrice(prevValue => prevValue - cartItems[indexOfItem].productPrice)
        } else {
            cartItems[indexOfItem].productQuantity = 1
        }
    }

    function increaseQty(indexOfItem) {
        cartItems[indexOfItem].productQuantity = cartItems[indexOfItem].productQuantity + 1
        setTotalQty(prevValue => prevValue + 1)
        setTotalPrice(prevValue => prevValue + cartItems[indexOfItem].productPrice)
    }

    function removeItem(indexOfItem) {
        let itemToBeRemoved = cartItems[indexOfItem]

        setTotalQty(prevValue => prevValue - itemToBeRemoved.productQuantity)
        setTotalPrice(prevValue => prevValue - (itemToBeRemoved.productQuantity * itemToBeRemoved.productPrice))
        cartItems.splice(indexOfItem, 1)
    }

    const handleCheckout = async () => {
        const stripe =  await getStripe()

        const response = await fetch("/api/checkout-sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({   
                cartItems: cartItems,
                totalPrice: totalPrice
            })
            
        })

        
        if (response.statusCode === 500) {
            console.log("Error: status code 500")
            return
        } 

        const data = await response.json()
        toast.loading("Redirecting...")
        stripe.redirectToCheckout({sessionId: data.result.id})
        
    }


    return (
        <ClientOnly>
            {(cartItems.length > 0) && <div>
                <div className={`${CartStyles.container} ${CartStyles.cartContainer}`}>
                    <div>
                        <h2 className={CartStyles.cartTitle}>Shopping Cart</h2>
                    </div>

                    <div>
                        {
                        desktopView 
                        ? 
                        <DesktopCartItems decreaseQty={decreaseQty} increaseQty={increaseQty} removeItem={removeItem} /> 
                        : 
                        <MobileCartItems decreaseQty={decreaseQty} increaseQty={increaseQty} removeItem={removeItem} />
                        }
                    </div>

                    
                    <div className={CartStyles.totalSummarySection}>
                        <div className={CartStyles.summaryTitleSection}>
                            <h3 className={CartStyles.summaryTitle}>CART TOTALS</h3>
                            <div className={CartStyles.summarySeparator}></div>
                        </div>

                        <div className={CartStyles.summaryInfo}>
                            <div className={`${CartStyles.flex} ${CartStyles.deliverySummary}`}>
                                <p className={CartStyles.deliveryLabel}>Shipping</p>
                                <p className={CartStyles.deliveryValue}>{totalPrice > 40 ? "Free" : "£2.99"}</p>
                            </div>
                            <div className={`${CartStyles.flex} ${CartStyles.subtotalSummary}`}>
                                <p className={CartStyles.subtotalLabel}>Subtotal</p>
                                <p className={CartStyles.subtotalValue}>£{totalPrice.toFixed(2)}</p>
                            </div>
                            <div className={`${CartStyles.flex} ${CartStyles.totalSummary}`}>
                                <p className={CartStyles.totalLabel}>Total</p>
                                <p className={CartStyles.totalValue}>£{totalPrice > 40 ? totalPrice.toFixed(2) : (totalPrice + 2.99).toFixed(2)}</p>
                            </div>
                        </div>

                        <div onClick={handleCheckout} className={CartStyles.paymentLink}>
                            <button className={CartStyles.paymentLinkBtn}>Proceed to Checkout</button>
                        </div>
                    </div>
                
                </div>

            </div>}

            {cartItems.length === 0 && 
                <div>
                    <EmptyCart />
                </div>
            }

        </ClientOnly>
    )
}