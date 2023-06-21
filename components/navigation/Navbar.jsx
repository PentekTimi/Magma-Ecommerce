'use client';

import { useMediaQuery } from "react-responsive"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import ClientOnly from "../common/ClientOnly"
import NavbarStyles from "./navigation.module.css"


export default function Navbar() {

    const desktopView = useMediaQuery({
        query: "(min-width: 992px)"
    })

    return (
        <div>
            <div>
                <ClientOnly>
                    {desktopView ? <DesktopNavbar /> : <MobileNavbar />}
                </ClientOnly>
            </div>
        </div>
    )
}