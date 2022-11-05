import React from "react";
import "./login-main.css";

const LoginMain = () => {
    return (
        <div className='login-main'>
            <div className='login-container'>
                <h1 className='main-heading'>Login to Continue 👋</h1>

                <div className='form-container my-4'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        required
                        className='form-control'
                    />
                </div>

                <div className='form-container  my-4'>
                    <input
                        type='password'
                        placeholder='Password'
                        required
                        className='form-control'
                    />
                </div>

                <div className='my-4 text-right'>
                    <a href='#/' className='text-pink link-small'>
                        Forgot Password?
                    </a>
                </div>

                <div className='form-container my-4'>
                    <button className='main-btn p-2'>Sign In</button>
                </div>

                <h3 className='heading-sub'>
                    Don't have an Account?
                    <a href='/register' className='text-pink size-medium mx-2'>
                        Create New
                    </a>
                </h3>
            </div>
        </div>
    );
};

export default LoginMain;
