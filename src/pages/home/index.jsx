import React from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import ImageSlider from "./components/image-slider";
import PopularOffers from "./components/popular-offers";
import "./home.css";

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <NavbarMain />
            <ImageSlider />

            <div className='body-main'>
                <PopularOffers />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
