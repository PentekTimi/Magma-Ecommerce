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
    const [search, setSearch] = useState(false)

    const handleHover = () => {setHover(true)}
    const handleLeave = () => {setHover(false)}

    const searchClick = () => {setSearch(true)}
    const searchExit = () => {setSearch(false)}

    const removeCursor = () => {
        let cursor = document.getElementById("cursor")
        cursor.classList.remove(`${NavbarStyles.cursor}`)
    }


    // on fcus remove cursor- out focus add it back?

    return (
        <div>
            <div className={NavbarStyles.container}>
                <div className={NavbarStyles.flex}>
                    
                    <div>
                        <div className={NavbarStyles["logo-container"]}>
                            <Logo color={"black"}/>
                        </div>

                    </div>

                    <div>
                        <ul className={NavbarStyles.flex}>
                            <li><Link prefetch={false} href={"/new-in"} className={NavbarStyles.links}>New In</Link></li>
                            <li>
                                <div className={NavbarStyles.flex} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                    <p className={`${NavbarStyles["links"]} ${NavbarStyles["shop-link"]}`}>Shop</p>
                                    <div className={NavbarStyles.arrowContainer}>
                                        <Image src={arrow} className={NavbarStyles.arrow} sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                                    </div>
                                </div>
                            </li>
                            <li><Link prefetch={false} href={"/sale"} className={`${NavbarStyles.links} ${NavbarStyles.saleLink}`}>Sale</Link></li>
                            <li><Link prefetch={false} href={"/about"} className={NavbarStyles.links}>About</Link></li>
                        </ul>

                        {hover && 
                            <div className={NavbarStyles.desktopDropdown} onMouseLeave={handleLeave} onMouseEnter={handleHover}>
                                    <ul className={NavbarStyles.dropdownList}>
                                        {links.map((menuItem, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link prefetch={false} href={menuItem.route} className={NavbarStyles.dropdownLinks}>{menuItem.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                            </div>
                        }
                    </div>
                    <div>
                        <div className={NavbarStyles.flex}>
                            <div className={NavbarStyles["icon-container"]} onClick={searchClick}>
                                <SearchIcon />
                            </div>
                            <div className={NavbarStyles["icon-container"]}>
                                <AccountIcon />
                            </div>
                            <div className={NavbarStyles["icon-container"]}>
                                <CartIcon />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

           {hover && <div className={NavbarStyles.fillerContent}></div>}
           {search && 
           <div className={NavbarStyles.activeSearchDropdown} onWheel={searchExit}>
                <div className={NavbarStyles.searchFiller} onMouseEnter={searchClick} onMouseLeave={searchExit}>
                    <div className={NavbarStyles.flex}>
                        <div className={NavbarStyles.searchIconMobile}>
                            <SearchIcon />
                        </div>
                        <form>
                            <input className={NavbarStyles.searchInputDesktop} onFocus={removeCursor} autoComplete="off" type="text" name="search" placeholder="Search..."></input>
                            <span id="cursor" className={NavbarStyles.cursor}></span>
                        </form>
                    </div>
                    <div className={NavbarStyles.quickLinksContainer}>
                        <p className={NavbarStyles.quickLinksTitle}>Quick Links</p>
                        <ul className={NavbarStyles.quickLinksList}>
                            <li><Link prefetch={false} className={NavbarStyles.quickLinksListItem} href={"/shop/phone-cases"}>Phone Cases</Link></li>
                            <li><Link prefetch={false} className={NavbarStyles.quickLinksListItem} href={"/shop/airpods-cases"}>Airpods Cases</Link></li>
                            <li><Link prefetch={false} className={NavbarStyles.quickLinksListItem} href={"/delivery-and-returns"}>Delivery and Returns</Link></li>
                            <li><Link prefetch={false} className={NavbarStyles.quickLinksListItem} href={"/faq"}>Faq</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={NavbarStyles.backDrop}></div>
           </div>}
        </div>
    )
}