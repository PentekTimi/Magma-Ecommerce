import LandingSection from "./LandingSection";
import Ribbon from "./Ribbon";
import CategoryShop from "./categoryShop";
import Banner from "./Banner";
import SocialProof from "./SocialProof";
import ExploreBest from "./ExploreBest";
import ClientOnly from "../common/ClientOnly";

export default function Home() {

    return (
        <div>
            <LandingSection />
            <Ribbon />
            <ClientOnly>
                <ExploreBest />
            </ClientOnly>
            <CategoryShop />
            <Banner />
            <SocialProof />
        </div>
    )
}