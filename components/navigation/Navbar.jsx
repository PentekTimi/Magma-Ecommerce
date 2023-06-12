'use client';

import { useMediaQuery } from "react-responsive"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"


export default function Navbar() {

    const desktopView = useMediaQuery({
        query: "(min-width: 992px)"
    })

    return (
        <div>
            <div>
                {desktopView ? <DesktopNavbar /> : <MobileNavbar />}
            </div>
        </div>
    )
}