import Image from "next/legacy/image"
import Logo from "../common/Logo"
import AccountIcon from "./AccountIcon"
import CartIcon from "./CartIcon"
import NavbarStyles from "./navigation.module.css"
import { useState } from "react"
import links from "./links"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { useCartContext } from "@/app/context/cartStore"
import { AnimatePresence, easeOut, motion } from "framer-motion"

export default function MobileNavbar() {
    
    const {totalQty} = useCartContext();
    const [menu, setMenu] = useState(false)
    
    const handleClick = () => {
        setMenu(!menu)
    }

    // animation for mobile dropdown
    const mobileDropdownVariants = {
        initial: {
            scaleY:0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    // animation for the list
    const ulVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        menu: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        }
    }

    // animation for the list items
    const listVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.4,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        menu: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.6,
            }
        },
    }

    // animation for search bar inside the mobile dropdown nav
    const searchBarVar = {
        initial: {
            opacity: 0,
            width: "0px",
            transition: {
                delay: 0.3,
            }
            
        },
        menu: {
            opacity: 1,
            width: "100%",
            transition: {
                delay: 0.5,
            }
        }
    }

    return (
        <div >
            <div className={NavbarStyles.container}>
                <div className={NavbarStyles.flex}>

                    <motion.div animate={{rotate: menu ? 90 : 0}} transition={{duration: 0.3, ease: easeOut}} id="hamburgerMenu" className={NavbarStyles["menu-container-mobile"]} onClick={handleClick}>
                        <Image src="/Burger-Nav.svg" alt="menu" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                    </motion.div>

                    <div className={NavbarStyles["logo-container"]}>
                        <Logo color={"black"}/>
                    </div>

                    <div className={NavbarStyles.flex}>
                        <div className={NavbarStyles["icon-container-mobile"]}>
                            <AccountIcon />
                        </div>
                        <Link href={"/cart"}>
                            <div className={NavbarStyles["icon-container-mobile"]}>
                                <CartIcon />
                                <div className={NavbarStyles.cartQuantityPopup}>
                                    <span className={totalQty < 1 ? `${NavbarStyles.cartQuantityPopupNoShow}` : `${NavbarStyles.cartQuantity}` }>{totalQty}</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            {/* render the dropdown elements if the menu is true */}
            <AnimatePresence>
                {menu && 
                <motion.div variants={mobileDropdownVariants} initial="initial" animate="animate" exit="exit" className={NavbarStyles.hamburgerMenu}>
                    <motion.div className={NavbarStyles.animateSearchBar} variants={searchBarVar} initial="initial" animate="menu" exit="initial">
                        <SearchBar closeMenu={handleClick}/>
                    </motion.div>
                
                    <motion.ul variants={ulVars} initial="initial" animate="menu" exit="initial" className={NavbarStyles.mobileLinksList}>
                        <div className={NavbarStyles.overflowHidden}>
                            <motion.li variants={listVariants}><Link onClick={handleClick} prefetch={false} href={"/shop/new-in"} className={NavbarStyles.mobileLinks}>New In</Link></motion.li>
                        </div>
                        {links.map((menuItem, index) => {
                            return (
                                <div className={NavbarStyles.overflowHidden}>
                                    <motion.li variants={listVariants} key={index}>
                                        <Link onClick={handleClick} prefetch={false} href={menuItem.route} className={NavbarStyles.mobileLinks}>{menuItem.name}</Link>
                                    </motion.li>
                                </div>
                            )
                        })}
                        <div className={NavbarStyles.overflowHidden}>
                            <motion.li variants={listVariants}><Link onClick={handleClick} prefetch={false} href={"/shop/sale"} className={`${NavbarStyles.mobileLinks} ${NavbarStyles.saleLinkMobile}`}>Sale</Link></motion.li>
                        </div>
                        <div className={NavbarStyles.overflowHidden}>
                            <motion.li variants={listVariants}><Link onClick={handleClick} prefetch={false} href={"/about"} className={NavbarStyles.mobileLinks}>About</Link></motion.li>
                        </div>
                    </motion.ul>

                </motion.div>}
            </AnimatePresence>

        </div>
    )
}