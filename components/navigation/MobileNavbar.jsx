import Image from "next/image"
import Logo from "../common/Logo"
import AccountIcon from "./AccountIcon"
import CartIcon from "./CartIcon"
import NavbarStyles from "./navigation.module.css"

export default function MobileNavbar() {
    return (
        <div className={NavbarStyles.container}>
            <div className={NavbarStyles.flex}>

                <div className={NavbarStyles["menu-container-mobile"]}>
                    <Image src="/Burger-Nav.svg" alt="menu" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                </div>

                <div className={NavbarStyles["logo-container"]}>
                    <Logo color={"black"}/>
                </div>

                <div className={NavbarStyles.flex}>
                    <div className={NavbarStyles["icon-container-mobile"]}>
                        <AccountIcon />
                    </div>
                    <div className={NavbarStyles["icon-container-mobile"]}>
                        <CartIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}