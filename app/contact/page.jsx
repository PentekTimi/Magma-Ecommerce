import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactStyles from "../../components/contact/contact.module.css";

export default function ContactPage() {
    return (
        <div>
            <div className={ContactStyles.container}>
                <h2 className={ContactStyles.contactTitle}>Get in touch with us.</h2>
                <div className={ContactStyles.contactCard}>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}