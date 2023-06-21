import Image from "next/legacy/image"
import Logo from "../common/Logo"
import AccountIcon from "./AccountIcon"
import CartIcon from "./CartIcon"
import NavbarStyles from "./navigation.module.css"
import { useState } from "react"
import links from "./links"
import Link from "next/link"
import SearchBar from "./SearchBar"

export default function MobileNavbar() {
    const [menu, setMenu] = useState(false)
    
    const handleClick = () => {
        setMenu(!menu)

        // rotate the hamburger icon when the button gets clicked
        let hamburgerIcon = document.getElementById("hamburgerMenu")
        let body = document.getElementById("body")
        if (!menu) {
            hamburgerIcon.style.transform = "rotate(90deg)"

            body.style.overflowY = "hidden";
            // hamburgerIcon.classList.remove(`${NavbarStyles.disabled}`)
            // hamburgerIcon.classList.add(`${NavbarStyles.active}`)
        } else {
            hamburgerIcon.style.transform = "rotate(180deg)"
            body.style.overflowY = "visible";
            // hamburgerIcon.classList.remove(`${NavbarStyles.active}`)
            // hamburgerIcon.classList.add(`${NavbarStyles.disabled}`)
        }
    }


    return (
        <div >
            <div className={NavbarStyles.container}>
                <div className={NavbarStyles.flex}>

                    <div id="hamburgerMenu" className={NavbarStyles["menu-container-mobile"]} onClick={handleClick}>
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

            {/* render the dropdown elements if the menu is true */}
            {menu && 
            <div className={NavbarStyles.hamburgerMenu}>
                <SearchBar />
                <ul className={NavbarStyles.mobileLinksList}>
                    <li><Link href={"/new-in"} className={NavbarStyles.mobileLinks}>New In</Link></li>
                    {links.map((menuItem, index) => {
                        return (
                            <li key={index}>
                                <Link href={menuItem.route} className={NavbarStyles.mobileLinks}>{menuItem.name}</Link>
                            </li>
                        )
                    })}
                    <li><Link href={"/sale"} className={NavbarStyles.mobileLinks}>Sale</Link></li>
                    <li><Link href={"/about"} className={NavbarStyles.mobileLinks}>About</Link></li>
                </ul>

            </div>}

        </div>
    )
}