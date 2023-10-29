import bannerImage from "../../public/bannerimage.jpg"
import Image from "next/legacy/image";
import homePageStyles from "./home.module.css";
import BannerSignUp from "./BannerSignUp";

export default function Banner() {
    return (
        <div className={homePageStyles.bannerSection}>
            <div className={homePageStyles.bannerDesktopView}>
                <div className={homePageStyles.bannerImgContainer}>
                    <Image src={bannerImage} sizes="100vw" alt="promotional image"/>
                </div>
                <div className={`${homePageStyles.bannerContent}`}>
                    <h3 className={homePageStyles.bannerTitle}>New collection coming soon!</h3>
                    <div className={homePageStyles.bannerDetails}>
                        <p className={homePageStyles.releaseDate}>Release Date:</p>
                        <p className={homePageStyles.promotionTime}>01.06.2023 GMT</p>
                    </div>
                    <BannerSignUp />
                </div>
            </div>
        </div>
    )
}