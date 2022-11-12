import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./logo.css";
import { useNavigate } from "react-router-dom";

const Logo = props => {
    const { lightMode } = props;
    const textColor = lightMode ? "white-color" : "black-color";
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    };

    return (
        <div
            className='d-flex align-items-center cursor-pointer'
            onClick={goToHomePage}
        >
            <img src={logo} alt='logo of company coffeee' />
            <div className={`logo-text mx-2 ${textColor}`}>Coffeee</div>
        </div>
    );
};

export default Logo;
