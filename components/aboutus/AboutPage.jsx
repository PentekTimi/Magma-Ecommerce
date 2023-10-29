import AboutStyles from "./about.module.css";
import Image from "next/legacy/image";
import asset1 from "../../public/about-page/asset1-aboutpage.jpg";
import asset2 from "../../public/about-page/asset2-aboutpage.jpg";
import asset3 from "../../public/about-page/asset3-aboutpage.jpg";
import asset4 from "../../public/about-page/asset4-aboutpage.jpg";

export default function AboutPage() {
    return (
        <div className={AboutStyles.aboutSection}>
            <div className={AboutStyles.container}>
                <div>
                    <div className={AboutStyles.aboutCopy}>
                        <h2 className={AboutStyles.title}>About Us</h2>
                        <p className={AboutStyles.description}>MAGMA is a tech accessories brand creating products designed from the core.</p>
                        <p className={AboutStyles.description}>Established in London in 2023, our products are worn by people all over the world. Join us in disrupting the accessory industry today.</p>
                    </div>
                    <div className={AboutStyles.imageGrid}>
                        <div className={`${AboutStyles.imageContainer} ${AboutStyles.item1}`}>
                            <Image className={AboutStyles.gridImage} src={asset1} alt="phone case" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"></Image>
                        </div>
                        <div className={`${AboutStyles.imageContainer} ${AboutStyles.item2}`}>
                            <Image className={AboutStyles.gridImage} src={asset2} alt="phone case" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"></Image>
                        </div>
                        <div className={`${AboutStyles.imageContainer} ${AboutStyles.item3}`}>
                            <Image className={AboutStyles.gridImage} src={asset3} alt="phone case" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"></Image>
                        </div>
                        <div className={`${AboutStyles.imageContainer} ${AboutStyles.item4}`}>
                            <Image className={AboutStyles.gridImage} src={asset4} alt="airpods case" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"></Image>
                        </div>
                    </div>
                </div>

                <div className={AboutStyles.advantages}>
                    <div className={AboutStyles.advantageContainer}>
                        <h3 className={AboutStyles.advantageTitle}>Designed from the core</h3>
                        <p className={AboutStyles.advantageDescription}>
                        Crafted with consideration, to be cherished and used, giving a new perspective on everyday 
                        essentials we sometimes take for granted.
                        </p>
                    </div>

                    <div className={AboutStyles.advantageContainer}>
                        <h3 className={AboutStyles.advantageTitle}>One case, one bottle</h3>
                        <p className={AboutStyles.advantageDescription}>
                        For each phone case sold, Magma recycles 1 plastic bottle from the ocean. 
                        Our mission is to empower global change while contributing to a cleaner Earth by setting clear 
                        goals to continuously optimize and improve our internal business processes. 
                        </p>
                    </div>

                    <div className={AboutStyles.advantageContainer}>
                        <h3 className={AboutStyles.advantageTitle}>Never settle for regular</h3>
                        <p className={AboutStyles.advantageDescription}> 
                        We design products that people buy not only because they need them but because they love them. 
                        Our products are real cute, and real tough.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}