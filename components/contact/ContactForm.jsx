"use client"
import ContactStyles from "./contact.module.css"
import toast from "react-hot-toast";
import { useRef } from "react";
import createContactMessage from "../helpers/createContactMessage";

export default function ContactForm() {

    const formRef = useRef()

    async function action(formData) {
        try {
            // call a function that uses server actions to send the subscription email
            await createContactMessage(formData)
            // clear input field 
            formRef.current.reset()
            toast.success("Subscription successful!")
        } catch (e) {
            formRef.current.reset()
            toast.error("Oops! Something went wrong. Please try again later.")
        }
    }
    

    return (
        <div className={ContactStyles.formWrapper}>
           
                <form ref={formRef} className={ContactStyles.contactForm} action={action}>
                    <label className={ContactStyles.labels} htmlFor="fname">First Name</label><br></br>
                    <input className={ContactStyles.nameField} type="text" id="fname" name="firstname" placeholder="Your Name..." />

                    <br></br>
                    <label className={ContactStyles.labels} htmlFor="lname">Last Name</label><br></br>
                    <input className={ContactStyles.nameField} type="text" id="lname" name="lastname" placeholder="Your Last name..." />

                    <br></br>
                    <label className={ContactStyles.labels} htmlFor="email">Email</label><br></br>
                    <input className={ContactStyles.emailField} type="email" id="email" name="email" placeholder="Your Email..." />

                    <br></br>
                    <label className={ContactStyles.labels} htmlFor="message">Message</label><br></br>
                    <textarea className={ContactStyles.messageBox} id="message" name="message" placeholder="Write your message..."></textarea>

                    <br></br>
                    <div className={ContactStyles.submitBtnWrapper}>
                        <button className={ContactStyles.submitBtn} type="submit">Send Message</button>
                    </div>
                </form>
           
        </div>
    )
}