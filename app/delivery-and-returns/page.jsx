"use client"
import { faTruck, faRedo } from "@fortawesome/fontawesome-free-solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import DeliveryStyles from "../../components/delivery/delivery.module.css"


export default function DeliveryAndReturns() {

    const [showDelivery, setShowDelivery] = useState(true)
    const [showReturns, setShowReturns] = useState(false)

    const activateDelivery = () => {
        setShowReturns(false)
        setShowDelivery(true)
    }

    const activateReturns = () => {
        setShowDelivery(false)
        setShowReturns(true)
    }

    return (
        <div className={DeliveryStyles.container}>
            <div className={DeliveryStyles.optionBoxes}>
                <div onClick={activateDelivery} className={showDelivery ? `${DeliveryStyles.optionBox} ${DeliveryStyles.active}` : `${DeliveryStyles.optionBox}`}>
                    <FontAwesomeIcon className={DeliveryStyles.optionIcon} icon={faTruck} />
                    <p className={DeliveryStyles.optionTitle}>Delivery</p>
                </div>
                <div onClick={activateReturns} className={showReturns ? `${DeliveryStyles.optionBox} ${DeliveryStyles.active}` : `${DeliveryStyles.optionBox}`}>
                    <FontAwesomeIcon className={DeliveryStyles.optionIcon} icon={faRedo} />
                    <p className={DeliveryStyles.optionTitle}>Returns</p>
                </div>
            </div>

            <div className={DeliveryStyles.informationBox}>
                {showDelivery ? 
                <div>
                    <p className={DeliveryStyles.info}>Orders are being dispatched from our warehouse in Buckinghamshire, UK within 2-3 business days after placing the order.</p>
                    <p className={DeliveryStyles.info}>We currently only ship to the United Kingdom, and shipping time is usually between 4 to 9 business days.</p>
                    <p className={DeliveryStyles.info}>Please note that these are approximate delivery times. We kindly ask you to give up to 10 days on top of the regular delivery time before getting in touch with our customer support team.</p>
                    <p className={DeliveryStyles.info}>Standard delivery is added for orders below 40GBP and costs £2.99</p>
                    <br></br>
                    <p className={DeliveryStyles.info}>Once your order has been dispatched, you will receive an email with a tracking number and a link to track your parcel. Please note that it might take from 2 to 3 business days for tracking to start showing information. Once the package gets taken from us, it travels to the Royal Mail logistics centre, where it gets scanned and starts updating tracking status, and it is not unusual for a shipment to go more than 24 hours without an update while in transit.</p>
                </div> 
                : 
                <div>
                    <p className={DeliveryStyles.info}>We are a customer-first company, and we strive to provide the best quality products with a seamless experience for you. Still, sometimes things happen, so if there&apos;s anything wrong with the item you have received, we will do our best to fix it and be satisfied.</p>
                    <p className={DeliveryStyles.info}>If you want to return the item, please contact us within 30 days of receiving the order at hello@magma.com. If you have discovered our fault, please take pictures of the defected, or wrong case sent to you and attach them to the initial email with an explanation.</p>
                    <br></br>
                    <p className={DeliveryStyles.info}>Please consider that all the shipping expenses for returning the item remain the responsibility of the customer.</p>
                    <p className={DeliveryStyles.info}>Refunds for returned items will be issued to the original payment method you used when placing your order.</p>
                </div>
                }
            </div>
        </div>
    )
}