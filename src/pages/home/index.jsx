import React from "react";
import Header from "../../common/components/header";
import Navbar from "../../common/components/navbar";
import "./home.css";

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Navbar />

            <section className='common-section'>Image slider</section>

            <section className='common-section'>Popular offers</section>

            <section className='common-section'>Payments</section>

            <section className='common-section'>Footer</section>
        </div>
    );
};

export default Home;
