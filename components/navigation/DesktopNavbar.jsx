import Link from "next/link";
import Logo from "../common/Logo";
import AccountIcon from "./AccountIcon";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import NavbarStyles from "./navigation.module.css"
import arrow from "../../public/arrow.svg"
import Image from "next/legacy/image";
import links from "./links"
import { useState } from "react";


export default function DesktopNavbar() {

    const [hover, setHover] = useState(false)

    const handleHover = () => {setHover(true)}
    const handleLeave = () => {setHover(false)}


    return (
        <div>
            <div className={NavbarStyles.container}>
                <div className={NavbarStyles.flex}>
                    
                    <div className={NavbarStyles["logo-container"]}>
                        <Logo color={"black"}/>
                    </div>

                    <div>
                        <ul className={NavbarStyles.flex}>
                            <li><Link href={"/new-in"} className={NavbarStyles.links}>New In</Link></li>
                            <li>
                                <div className={NavbarStyles.flex} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                    <p className={`${NavbarStyles["links"]} ${NavbarStyles["shop-link"]}`}>Shop</p>
                                    <div className={NavbarStyles.arrowContainer}>
                                        <Image src={arrow} className={NavbarStyles.arrow} sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                                    </div>
                                </div>
                            </li>
                            <li><Link href={"/sale"} className={NavbarStyles.links}>Sale</Link></li>
                            <li><Link href={"/about"} className={NavbarStyles.links}>About</Link></li>
                        </ul>

                        {hover && 
                            <div className={NavbarStyles.desktopDropdown} onMouseLeave={handleLeave} onMouseEnter={handleHover}>
                                    <ul className={NavbarStyles.dropdownList}>
                                        {links.map((menuItem, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={menuItem.route} className={NavbarStyles.dropdownLinks}>{menuItem.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                            </div>
                        }
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

           {hover && <div className={NavbarStyles.fillerContent}></div>}
        </div>
    )
}