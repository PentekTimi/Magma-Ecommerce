import ContactStyles from "./contact.module.css"

export default function ContactForm() {

    return (
        <div className={ContactStyles.formWrapper}>
           
                <form className={ContactStyles.contactForm} action="">
                    <label className={ContactStyles.labels} for="fname">First Name</label><br></br>
                    <input className={ContactStyles.nameField} type="text" id="fname" name="firstname" placeholder="Your Name..." />

                    <br></br>
                    <label className={ContactStyles.labels} for="lname">Last Name</label><br></br>
                    <input className={ContactStyles.nameField} type="text" id="lname" name="lastname" placeholder="Your Last name..." />

                    <br></br>
                    <label className={ContactStyles.labels} for="email">Email</label><br></br>
                    <input className={ContactStyles.emailField} type="email" id="email" name="email" placeholder="Your Email..." />

                    <br></br>
                    <label className={ContactStyles.labels} for="message">Message</label><br></br>
                    <textarea className={ContactStyles.messageBox} id="message" name="message" placeholder="Write your message..."></textarea>

                    <br></br>
                    <div className={ContactStyles.submitBtnWrapper}>
                        <button className={ContactStyles.submitBtn} type="submit">Send Message</button>
                    </div>
                </form>
           
        </div>
    )
}