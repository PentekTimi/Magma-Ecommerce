"use client"
import createSubscription from "../helpers/createSubscription";
import { useRef } from "react";
import homePageStyles from "./home.module.css";
import toast from "react-hot-toast";

export default function BannerSignUp() {
    const formRef = useRef()

    async function action(formData) {
        try {
            // call a function that uses server actions to send the subscription email
            await createSubscription(formData)
            // clear input field 
            formRef.current.reset()
            toast.success("Subscription successful!")
        } catch (e) {
            formRef.current.reset()
            toast.error("Oops! Something went wrong. Please try again later.")
        }
    }

    return (
        <form ref={formRef} action={action} className={`${homePageStyles.bannerInputWrapper} ${homePageStyles.flex}`}>
            <input className={homePageStyles.bannerInput} name="email" type="email" placeholder="example@email.com"></input>
            <button type="submit" className={homePageStyles.bannerBtn}>Notify me!</button>
        </form>
    )
}