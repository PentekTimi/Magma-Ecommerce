import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FooterStyles from "./footer.module.css";
import Link from "next/link";

export default function Social() {
    return (
        <div className={FooterStyles.socials}>
            <Link href={"https://github.com/"} legacyBehavior><FontAwesomeIcon className={FooterStyles.socialIcon} icon={faGithub} /></Link>
            <Link href={"https://www.linkedin.com/"} legacyBehavior><FontAwesomeIcon className={FooterStyles.socialIcon} icon={faLinkedin}/></Link>
            <Link href={"https://www.facebook.com/"} legacyBehavior><FontAwesomeIcon className={FooterStyles.socialIcon} icon={faFacebook}/></Link>
        </div>
    );
}