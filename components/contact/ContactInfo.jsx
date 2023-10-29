import memojis from "../../public/memoji.png"
import Image from "next/legacy/image";
import ContactStyles from "./contact.module.css"

export default function ContactInfo() {
    return (
        <div className={ContactStyles.contactInfoWrapper}>
            <div className={ContactStyles.imageWrapper}>
                <Image className={ContactStyles.contactImage} src={memojis} layout="fill" sizes="100vw" alt="team image"></Image>
            </div>
            <div className={ContactStyles.contactCopy}>
                <h3 className={ContactStyles.contactInfoTitle}>Speak with our friendly team!</h3>
                <p className={ContactStyles.infoDetails}>Have an inquiry about Magma or need help with your order? Our team can help you.</p>
                <p className={ContactStyles.businessInfoDetails}>For business inquiries please send email to admin@magma.com</p>
            </div>
        </div>
    )
}