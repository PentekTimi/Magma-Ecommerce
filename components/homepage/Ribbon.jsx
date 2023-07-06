import homePageStyles from "./home.module.css";

export default function Ribbon() {
    return (
        <div className={homePageStyles.ribbon}>
            <ul className={homePageStyles.ribbonContent}>
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
                <li className={homePageStyles.ribbonText}>Free delivery on orders above £40</li>
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
                <li className={homePageStyles.ribbonText}>Free delivery on orders above £40</li>
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
            </ul>

            <ul className={homePageStyles.ribbonContent} aria-hidden="true">
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
                <li className={homePageStyles.ribbonText}>Free delivery on orders above £40</li>
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
                <li className={homePageStyles.ribbonText}>Free delivery on orders above £40</li>
                <li className={homePageStyles.ribbonText}>10% OFF with code HELLO10</li>
            </ul>

        </div>
    )
}