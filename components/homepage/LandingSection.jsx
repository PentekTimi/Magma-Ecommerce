import Image from "next/legacy/image";
import homePagephoneCase from "../../public/homePagephoneCase.jpg";
import homePageStyles from "./home.module.css";
import arrow from "../../public/arrow.svg"
import Link from "next/link";

export default function LandingSection() {
    return (
        <div className={homePageStyles.landingWrapper}>
            <div className={homePageStyles.desktopView}>
                <div className={homePageStyles.landingImgContainer}>
                    <Image className={homePageStyles.landingImg} src={homePagephoneCase} priority sizes="100vw" alt="green phone case"/>
                </div>
                <div className={homePageStyles.landingCopyWrapper}>
                    <h1 className={homePageStyles.landingHeading}>Immerse your tech in a seamless blend of form and function.</h1>
                    <div className={`${homePageStyles.flex} ${homePageStyles.landingCTAs}`}>
                        <Link href={"/"}><button className={homePageStyles.exploreBtn}>Explore</button></Link>
                        
                        <Link href={"/"} className={`${homePageStyles.flex} ${homePageStyles.categoryLinkContainer}`}>
                            <span className={homePageStyles.categoryLink} href={"/"}>Shop by Category</span>
                            <div className={homePageStyles.arrowContainer}>
                                <Image src={arrow} sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}