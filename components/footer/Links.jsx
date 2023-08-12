import Link from "next/link";
import FooterStyles from "./footer.module.css";

export default function Links() {
    return (
        <div className={FooterStyles.navigationLinks}>
            <div className={FooterStyles.list}>
                <p className={FooterStyles.linksTitle}>Explore</p>
                <ul>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/shop/phone-cases"}> Phone Cases </Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/shop/macbook-cases"}>Macbook Cases</Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/shop/airpods-cases"}>Airpods Cases</Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/shop/smartwatch-bands"}>Apple Watch Bands</Link></li>
                </ul>
            </div>
            <div className={FooterStyles.list}>

                <p className={FooterStyles.linksTitle}>Help</p>
                <ul>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/contact"}>Contact Us</Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/delivery-and-returns"}>Delivery and Returns</Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/faq"}>FAQ</Link></li>
                    <li className={FooterStyles.listItem}><Link prefetch={false} className={FooterStyles.link} href={"/terms-and-conditions"}>Terms and Conditions</Link></li>
                </ul>
            </div>
        </div>
    )
}