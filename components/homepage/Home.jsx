import Image from "next/legacy/image";
import homePageStyles from "./home.module.css";
import LandingSection from "./LandingSection";
import Ribbon from "./Ribbon";
import CategoryShop from "./categoryShop";
import Banner from "./Banner";
import SocialProof from "./SocialProof";
import ExploreBest from "./ExploreBest";

export default function Home() {
    return (
        <div>
            <LandingSection />
            <Ribbon />
            <ExploreBest />
            <CategoryShop />
            <Banner />
            <SocialProof />
        </div>
    )
}