import React from "react";
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

            <section className='common-section'>Payments</section>

            <section className='common-section'>Footer</section>
        </div>
    );
};

export default Home;
