import Link from "next/link";
import BestSellerCarousel from "./BestSellerCarousel";
import homePageStyles from "./home.module.css";

export default function ExploreBest() {

    return (
        <div className={homePageStyles.bestSellers}>
            <div className={homePageStyles.container}>
                <div className={homePageStyles.bestSellersCopy}>
                    <h2 className={homePageStyles.bestSellersTitle}>Explore Best Sellers</h2>
                    <p className={homePageStyles.bestSellerSubtitle}>Shop the most loved selection of phone cases from all time.</p>
                </div>
                <div className={homePageStyles.bestSellersCarousel}>
                    <BestSellerCarousel />
                </div>
                <div className={homePageStyles.bestSellerCTA}>
                    <Link href={"/shop/new-in"}>
                        <button className={homePageStyles.bestSellersBtn}>See more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}