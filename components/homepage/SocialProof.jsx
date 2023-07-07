import homePageStyles from "./home.module.css";
import Image from "next/legacy/image";
import cloudcase from "../../public/cloudcase.jpg"
import greenmarble from "../../public/greenmarble.jpg"
import greenmarblepov from "../../public/greenmarblepov.jpg"
import liquidgold from "../../public/liquidgold.jpg"
import nudemarble from "../../public/nudemarble.jpg"
import pinkpop from "../../public/pinkpop.jpg"

export default function SocialProof() {
    return (
        <div>
            <div className={homePageStyles.socialProofContainer}>
                <div className={homePageStyles.socialProofCopy}>
                    <h3 className={homePageStyles.socialProofTitle}>#MAGMA</h3>
                    <p className={homePageStyles.socialProofSubtitle}>Join 536k followers at @officialmagma</p>
                </div>
                <div className={homePageStyles.socialImgContainer}>
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
                </div>
            </div>
        </div>
    )
}