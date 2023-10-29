"use client"
import Image from "next/legacy/image";
import homePagephoneCase from "../../public/homePagephoneCase.jpg";
import homePageStyles from "./home.module.css";
import arrow from "../../public/arrow.svg"
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInImageVariant = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}
const fadeInTextVariant = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function LandingSection() {
    return (
        <div className={homePageStyles.landingWrapper}>
            <div className={homePageStyles.desktopView}>
                <motion.div variants={fadeInImageVariant} initial="initial" whileInView="animate" className={homePageStyles.landingImgContainer}>
                    <Image priority className={homePageStyles.landingImg} src={homePagephoneCase} sizes="100vw" alt="green phone case"/>
                </motion.div>
                <motion.div variants={fadeInTextVariant} initial="initial" whileInView="animate" className={homePageStyles.landingCopyWrapper}>
                    <h1 className={homePageStyles.landingHeading}>Immerse your tech in a seamless blend of form and function.</h1>
                    <div className={`${homePageStyles.flex} ${homePageStyles.landingCTAs}`}>
                        <Link href={"/shop/new-in"}><button className={homePageStyles.exploreBtn}>Explore</button></Link>
                        
                        <Link href="#categoryShop" className={`${homePageStyles.flex} ${homePageStyles.categoryLinkContainer}`}>
                            <span className={homePageStyles.categoryLink}>Shop by Category</span>
                            <div className={homePageStyles.arrowContainer}>
                                <Image src={arrow} sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw" alt="navigation arrow"/>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}