"use client"
import { useCartContext } from "@/app/context/cartStore"
import Image from "next/legacy/image"
import CartStyles from "./cart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faTrash } from "@fortawesome/fontawesome-free-solid"

export default function DesktopCartItems() {

    const {cartItems} = useCartContext()
    
    return (
        <div>
            {cartItems.map((cartItem, index) => {
                return (
                    <div key={index} className={`${CartStyles.flex} ${CartStyles.singleCartItem}`}>
                        <div className={`${CartStyles.flex} ${CartStyles.cartProductDetails}`}>
                            <div className={CartStyles.itemImageWrapper}>
                                <Image className={CartStyles.itemImage} src={cartItem.productImage} sizes="100vw" layout="fill" alt="product image"></Image>
                            </div>

                            <div className={`${CartStyles.cartInfoGeneral}`}>
                                <div className={CartStyles.cartItemGeneralInfo}>
                                    <p className={CartStyles.cartItemName}>{(cartItem.productName).toUpperCase()} print - £{cartItem.productPrice}</p>
                                    <p className={CartStyles.cartItemModel}>{cartItem.productModel}</p>
                                    <p className={CartStyles.cartItemID}>#{cartItem.productID}</p>
                                </div>
                            </div>
                        </div>

                        <div className={CartStyles.cartQtyOptions}>
                            <button className={CartStyles.cartQtyBtn}><FontAwesomeIcon className={CartStyles.faQtyBtn} icon={faMinus}/></button>
                            <span className={CartStyles.cartQtyDisplay}>{cartItem.productQuantity}</span>
                            <button className={CartStyles.cartQtyBtn}><FontAwesomeIcon className={`${CartStyles.faQtyBtn} ${CartStyles.faQtyBtnPlus}`} icon={faPlus}/></button>
                        </div>

                        <div className={CartStyles.cartItemTotalPriceContainer}>
                            <p className={CartStyles.cartItemTotalPrice}>£{cartItem.productPrice * cartItem.productQuantity}</p>
                        </div>

                        <div className={CartStyles.removeItemBtn}>
                            <button className={CartStyles.removeBtn}><FontAwesomeIcon className={CartStyles.faRemoveBtn} icon={faTrash} /></button>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}