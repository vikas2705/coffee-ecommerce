import React from "react";
import Banner from "../../common/components/banner";
import RegisterMain from "./components/register-main";
import "./register.css";

const Register = () => {
    return (
        <div className='register-page'>
            <Banner />
            <RegisterMain />
        </div>
    );
};

export default Register;
