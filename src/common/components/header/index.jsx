import React from "react";
import Logo from "../logo";
import "./header.css";
import CartIcon from "../../assets/icons/cart";
import userIcon from "../../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/login");
    };

    return (
        <div className='container-lg'>
            <div className='main-content'>
                <div className='left-part'>
                    <Logo />

                    <div className='input-group mx-4'>
                        <input
                            type='text'
                            className='form-control custom-width'
                            placeholder='Search for  product, brands or more…'
                        />
                        <span className='input-group-text' id='basic-addon2'>
                            <i className='bi bi-search'></i>
                        </span>
                    </div>
                </div>
                <div className='right-part'>
                    <div className='header-icons'>
                        <CartIcon />
                        <span className='header-text mx-2'>Cart</span>
                    </div>

                    <div
                        className='header-icons marginLeft20'
                        onClick={goToLoginPage}
                    >
                        <img src={userIcon} alt='logo icon' />
                        <span className='header-text mx-2'>Login/Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
