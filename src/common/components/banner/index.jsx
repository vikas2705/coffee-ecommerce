import React from "react";
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";
import "./banner.css";
import Logo from "../logo";

const Banner = () => {
    return (
        <div className='app-banner'>
            <div className='padding-40'>
                <Logo lightMode />
                <img
                    src={mobileLarge}
                    alt='moble icon'
                    className='relative top70'
                />
                <img src={mobileBottom} alt='moble icon' />
                <div className='banner-text'>
                    India’s Leading Mobile Comparison Portal
                </div>
            </div>
        </div>
    );
};

export default Banner;
