import Links from "./Links";
import Logo from "../common/Logo";
import SignUp from "./SignUp";
import Social from "./Social";
import FooterStyles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <div className="container">

                <div className={FooterStyles.wrap}>
                    <div>
                        <div className={FooterStyles["logo-container"]}>
                            <Logo color={"white"}/>
                        </div>
                        <SignUp />
                        <Social />
                    </div>
                    <div>
                        <Links />   
                    </div>
                </div>

            </div>
        </div>
    )
}