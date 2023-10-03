"use client"
import homePageStyles from "./home.module.css";
import Image from "next/legacy/image";
import cloudcase from "../../public/cloudcase.jpg"
import greenmarble from "../../public/greenmarble.jpg"
import greenmarblepov from "../../public/greenmarblepov.jpg"
import liquidgold from "../../public/liquidgold.jpg"
import nudemarble from "../../public/nudemarble.jpg"
import pinkpop from "../../public/pinkpop.jpg"
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialProof() {

    const socialFadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05,
                duration: 0.8
            }
        }
    }
    return (
        <div>
            <div className={homePageStyles.socialProofContainer}>
                <div className={homePageStyles.socialProofCopy}>
                    <h3 className={homePageStyles.socialProofTitle}>#MAGMA</h3>
                    <p className={homePageStyles.socialProofSubtitle}>Join 536k followers at <Link className={homePageStyles.instagramLink} href="https://instagram.com">@officialmagma</Link></p>
                </div>
                <motion.div variants={socialFadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} className={homePageStyles.socialImgContainer}>
                    <div className={homePageStyles.singleSocialImgContainer}>
                        <div className={homePageStyles.mainImgContainer}>
                            <Image src={cloudcase} sizes="100vw" alt="social proof image"/>
                        </div>
                        <div className={homePageStyles.secondarySocialImgContainer}>
                            <div className={homePageStyles.secondaryImgContainer}>
                                <Image src={nudemarble} sizes="100vw" alt="social proof image"/>
                            </div>
                            <div className={homePageStyles.secondaryImgContainer}>
                                <Image src={greenmarblepov} sizes="100vw" alt="social proof image"/>
                            </div>
                        </div>
                    </div>
                    <div className={homePageStyles.singleSocialImgContainer}>
                        <div className={homePageStyles.mainImgContainer}>
                            <Image src={greenmarble} sizes="100vw" alt="social proof image"/>
                        </div>
                        <div className={homePageStyles.secondarySocialImgContainer}>
                            <div className={homePageStyles.secondaryImgContainer}>
                                <Image src={pinkpop} sizes="100vw" alt="social proof image"/>
                            </div>
                            <div className={homePageStyles.secondaryImgContainer}>
                                <Image src={liquidgold} sizes="100vw" alt="social proof image"/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}