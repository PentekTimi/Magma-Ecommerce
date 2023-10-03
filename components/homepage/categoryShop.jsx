"use client"
import homePageStyles from "./home.module.css";
import Image from "next/legacy/image";
import iphone from "../../public/iphone.png"
import airpods from "../../public/airpods.png"
import watch from "../../public/watch.png"
import laptop from "../../public/laptop.png"
import Link from "next/link";
import {motion} from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
            duration: 0.8
        }
    })
}

export default function CategoryShop() {
    return (
        <div id="categoryShop" className={`${homePageStyles.categorySection} ${homePageStyles.container}`}>
            <div className={homePageStyles.categoryWrap}>
                <h2 className={homePageStyles.categoryTitle}>Shop by Category</h2>
                <div className={homePageStyles.categoryDesktopView}>
                    <div className={`${homePageStyles.flex} ${homePageStyles.dualCategoryWrapper}`}>
                        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={1}>
                            <Link href={"/shop/phone-cases"}>
                                <div className={homePageStyles.iphoneImgContainer}>
                                    <Image src={iphone} sizes="100vw" alt="phone case category"/>
                                </div>
                                <p className={`${homePageStyles.categoryText} ${homePageStyles.phoneText}`}>Iphone Cases</p>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={2}>
                            <Link href={"/shop/airpods-cases"}>
                                <div className={homePageStyles.airpodsImgContainer}>
                                    <Image src={airpods} sizes="100vw" alt="airpods case category"/>
                                </div>
                                <p className={`${homePageStyles.categoryText} ${homePageStyles.airpodsText}`}>Airpods Cases</p>
                            </Link>
                        </motion.div>
                    </div>

                    <div className={`${homePageStyles.flex} ${homePageStyles.dualCategoryWrapper}`}>
                        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={3}>
                            <Link href={"/shop/smartwatch-bands"}>
                                <div className={homePageStyles.watchImgContainer}>
                                    <Image src={watch} sizes="100vw" alt="watch bands category"/>
                                </div>
                                <p className={`${homePageStyles.categoryText} ${homePageStyles.watchText}`}>Smartwatch Bands</p>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={4}>
                            <Link href={"/shop/macbook-cases"}>
                                <div className={homePageStyles.laptopImgContainer}>
                                    <Image src={laptop} sizes="100vw" alt="laptop case category"/>
                                </div>
                                <p className={`${homePageStyles.categoryText} ${homePageStyles.laptopText}`}>Macbook Cases</p>
                            </Link>
                        </motion.div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}