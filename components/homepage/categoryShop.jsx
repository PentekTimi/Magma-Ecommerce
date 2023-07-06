import homePageStyles from "./home.module.css";
import Image from "next/legacy/image";
import iphone from "../../public/iphone.png"
import airpods from "../../public/airpods.png"
import watch from "../../public/watch.png"
import laptop from "../../public/laptop.png"
import Link from "next/link";

export default function CategoryShop() {
    return (
        <div className={`${homePageStyles.categorySection} ${homePageStyles.container}`}>
            <div className={homePageStyles.categoryWrap}>
                <h2 className={homePageStyles.categoryTitle}>Shop by Category</h2>
                <div className={homePageStyles.categoryDesktopView}>
                    <div className={`${homePageStyles.flex} ${homePageStyles.dualCategoryWrapper}`}>
                        <Link href={"/shop/phone-cases"}>
                            <div className={homePageStyles.iphoneImgContainer}>
                                <Image src={iphone} sizes="100vw" alt="phone case category"/>
                            </div>
                            <p className={`${homePageStyles.categoryText} ${homePageStyles.phoneText}`}>Iphone Cases</p>
                        </Link>
                        <Link href={"/shop/airpods-cases"}>
                            <div className={homePageStyles.airpodsImgContainer}>
                                <Image src={airpods} sizes="100vw" alt="airpods case category"/>
                            </div>
                            <p className={`${homePageStyles.categoryText} ${homePageStyles.airpodsText}`}>Airpods Cases</p>
                        </Link>
                    </div>

                    <div className={`${homePageStyles.flex} ${homePageStyles.dualCategoryWrapper}`}>
                        <Link href={"/shop/smartwatch-bands"}>
                            <div className={homePageStyles.watchImgContainer}>
                                <Image src={watch} sizes="100vw" alt="watch bands category"/>
                            </div>
                            <p className={`${homePageStyles.categoryText} ${homePageStyles.watchText}`}>Smartwatch Bands</p>
                        </Link>
                        <Link href={"/shop/macbook-cases"}>
                            <div className={homePageStyles.laptopImgContainer}>
                                <Image src={laptop} sizes="100vw" alt="laptop case category"/>
                            </div>
                            <p className={`${homePageStyles.categoryText} ${homePageStyles.laptopText}`}>Macbook Cases</p>
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}