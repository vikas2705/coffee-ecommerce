import React from "react";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import "./home.css";

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <NavbarMain />

            <section className='common-section'>Image slider</section>

            <section className='common-section'>Popular offers</section>

            <section className='common-section'>Payments</section>

            <section className='common-section'>Footer</section>
        </div>
    );
};

export default Home;
