"use client"
import Link from "next/link";
import Logo from "../common/Logo";
import AccountIcon from "./AccountIcon";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import NavbarStyles from "./navigation.module.css"
import arrow from "../../public/arrow.svg"
import Image from "next/legacy/image";
import links from "./links"
import { useEffect, useState } from "react";
import { useCartContext } from "@/app/context/cartStore";
import { useRouter } from "next/navigation";
import ClientOnly from "../common/ClientOnly";


export default function DesktopNavbar() {

    const router = useRouter()
    const {totalQty} = useCartContext();
    

    const [hover, setHover] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleHover = () => {setHover(true)}
    const handleLeave = () => {setHover(false)}

    const searchClick = () => {setSearch(true)}
    const searchExit = () => {setSearch(false)}

    const removeCursor = () => {
        let cursor = document.getElementById("cursor")
        cursor.classList.remove(`${NavbarStyles.cursor}`)
    }

    const handleSearch = () => {
        setSearch(false)
    }


    const searchValueAdded = (event) => {
        let searchInput = document.getElementById("searchQuestion")
        setSearchTerm(event.target.value)
        
        searchInput.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    e.preventDefault()
                    setSearch(false)
                    router.push(`/search?q=${event.target.value}`)
                }
            })
        }
        

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
                            <li><Link prefetch={false} href={"/shop/new-in"} className={NavbarStyles.links}>New In</Link></li>
                            <li>
                                <div className={NavbarStyles.flex} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                    <p className={`${NavbarStyles["links"]} ${NavbarStyles["shop-link"]}`}>Shop</p>
                                    <div className={NavbarStyles.arrowContainer}>
                                        <Image src={arrow} className={NavbarStyles.arrow} sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                                    </div>
                                </div>
                            </li>
                            <li><Link prefetch={false} href={"/shop/sale"} className={`${NavbarStyles.links} ${NavbarStyles.saleLink}`}>Sale</Link></li>
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
                            <Link href={"/cart"}>
                                <div className={NavbarStyles["icon-container"]}>
                                    <CartIcon />
                                    <div className={NavbarStyles.cartQuantityPopup}>
                                        <span className={totalQty < 1 ? `${NavbarStyles.cartQuantityPopupNoShow}` : `${NavbarStyles.cartQuantity}` }>{totalQty}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

           {hover && <div className={NavbarStyles.fillerContent}></div>}
           {search && 
           <div className={NavbarStyles.activeSearchDropdown} onWheel={searchExit}>
                <div className={NavbarStyles.searchFiller} onMouseEnter={searchClick} onMouseLeave={searchExit}>
                    <div className={NavbarStyles.flex}>
                        <div className={NavbarStyles.searchIconMobile} onClick={() => {setSearch(false); router.push(`/search?q=${searchTerm}`)}}>
                            <SearchIcon />
                        </div>
                        <form>
                            <input autoFocus id="searchQuestion" className={NavbarStyles.searchInputDesktop} onFocus={removeCursor} onChange={searchValueAdded} autoComplete="off" type="text" name="search" placeholder="Search for an item or category..."></input>
                            <span id="cursor" className={NavbarStyles.cursor}></span>
                        </form>
                    </div>
                    <div className={NavbarStyles.quickLinksContainer}>
                        <p className={NavbarStyles.quickLinksTitle}>Quick Links</p>
                        <ul className={NavbarStyles.quickLinksList}>
                            <li><Link prefetch={false} onClick={handleSearch} className={NavbarStyles.quickLinksListItem} href={"/shop/phone-cases"}>Phone Cases</Link></li>
                            <li><Link prefetch={false} onClick={handleSearch} className={NavbarStyles.quickLinksListItem} href={"/shop/airpods-cases"}>Airpods Cases</Link></li>
                            <li><Link prefetch={false} onClick={handleSearch} className={NavbarStyles.quickLinksListItem} href={"/delivery-and-returns"}>Delivery and Returns</Link></li>
                            <li><Link prefetch={false} onClick={handleSearch} className={NavbarStyles.quickLinksListItem} href={"/faq"}>Faq</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={NavbarStyles.backDrop}></div>
           </div>
           }
        </div>
    )
}