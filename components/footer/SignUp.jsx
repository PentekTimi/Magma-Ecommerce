"use client"

import FooterStyles from "./footer.module.css";
import createSubscription from "../helpers/createSubscription";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
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
        <div className={FooterStyles.signUp}>
            <div>
                <form ref={formRef} className="flex" action={action}>
                    <input className={FooterStyles.input} type="email" placeholder="example@email.com" required name="email"></input>
                    <button type="submit" className={FooterStyles.signUpButton}>Sign Up</button>
                </form>
            </div>
            <p className={FooterStyles.policyAgreementText}>By signing up, I agree with the Data Protection Policy of Magma</p>
        </div>
    )
}
