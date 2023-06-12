import Link from "next/link";
import Logo from "../common/Logo";
import AccountIcon from "./AccountIcon";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import NavbarStyles from "./navigation.module.css"
import arrow from "../../public/arrow.svg"
import Image from "next/image";

export default function DesktopNavbar() {
    return (
            <div className={NavbarStyles.container}>
                <div className={NavbarStyles.flex}>
                    
                    <div className={NavbarStyles["logo-container"]}>
                        <Logo color={"black"}/>
                    </div>

                    <div>
                        <ul className={NavbarStyles.flex}>
                            <li><Link href={"/new-in"} className={NavbarStyles.links}>New In</Link></li>
                            <li>
                                <div>
                                    <p className={`${NavbarStyles["links"]} ${NavbarStyles["shop-link"]}`}>Shop 
                                    <Image src={arrow} className={NavbarStyles.arrow}/></p>
                                </div>
                            </li>
                            <li><Link href={"/sale"} className={NavbarStyles.links}>Sale</Link></li>
                            <li><Link href={"/about"} className={NavbarStyles.links}>About</Link></li>
                        </ul>
                    </div>

                    <div className={NavbarStyles.flex}>
                        <div className={NavbarStyles["icon-container"]}>
                            <AccountIcon />
                        </div>
                        <div className={NavbarStyles["icon-container"]}>
                            <SearchIcon />
                        </div>
                        <div className={NavbarStyles["icon-container"]}>
                            <CartIcon />
                        </div>
                    </div>

                </div>
            </div>
    )
}