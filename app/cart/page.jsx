"use client"
import DesktopCartItems from "@/components/cart/DesktopCartItems"
import MobileCartItems from "@/components/cart/MobileCartItems"
import { useMediaQuery } from "react-responsive"
import CartStyles from "../../components/cart/cart.module.css"
import Link from "next/link"
import { useCartContext } from "../context/cartStore"
import ClientOnly from "@/components/common/ClientOnly"
import EmptyCart from "@/components/cart/EmptyCart"


export default function Cart() {

    

    const desktopView = useMediaQuery({
        query: "(min-width: 992px)"
    })

    const {cartItems, totalPrice} = useCartContext()

    return (
        <ClientOnly>
            {(cartItems.length > 0) && <div>
                <div className={`${CartStyles.container} ${CartStyles.cartContainer}`}>
                    <div>
                        <h2 className={CartStyles.cartTitle}>Shopping Cart</h2>
                    </div>

                    <div>
                        {desktopView ? <DesktopCartItems /> : <MobileCartItems />}
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

                        <div className={CartStyles.paymentLink}>
                            <Link className={CartStyles.paymentLinkBtn} href="/">Proceed to Checkout</Link>
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