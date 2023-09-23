import AboutUs from "./AboutUs"
import Benefits from "./Benifits"
import Features from "./Features"
import LandingPage from "./LandingPage"
import Reviews from "./Reviews"
import Footer from "./Footer"
import MidBox from "./MidBox"

const Layout = () => {
    return (
        <div className="">
            <LandingPage />
            <Benefits />
            <MidBox />
            <div className="h-[100px] md:h-[200px]"></div>
            <Reviews />
            <Features />
            <AboutUs />
            <Footer />
        </div >
    )
}

export default Layout