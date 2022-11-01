import React from "react";
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";
import "./banner.css";

const Banner = () => {
    return (
        <div className='app-banner'>
            <img src={mobileLarge} alt='moble icon' />
            <img src={mobileBottom} alt='moble icon' />
        </div>
    );
};

export default Banner;
