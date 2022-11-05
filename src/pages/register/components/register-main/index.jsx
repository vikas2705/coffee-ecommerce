import React from "react";
import "./register-main.css";

const RegisterMain = () => {
    return (
        <div className='register-main'>
            <div className='register-container'>
                <h1 className='main-heading'>Create Account 😍</h1>

                <div className='form-container my-4'>
                    <input
                        type='text'
                        placeholder='Full Name'
                        required
                        className='form-control'
                    />
                </div>

                <div className='form-container my-4'>
                    <input
                        type='number'
                        placeholder='Mobile Number'
                        required
                        className='form-control'
                    />
                </div>

                <div className='form-container my-4'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        required
                        className='form-control'
                    />
                </div>

                <div className='form-container my-4'>
                    <input
                        type='date'
                        placeholder='Date of birth (DD/MM/YYYY)'
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

                <div className='form-container  my-4'>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        required
                        className='form-control'
                    />
                </div>

                <div className='form-container my-4'>
                    <button className='main-btn p-2'>Create Account</button>
                </div>

                <h3 className='heading-sub'>
                    Already have an Account?
                    <a href='/login' className='text-pink size-medium mx-2'>
                        Login here
                    </a>
                </h3>
            </div>
        </div>
    );
};

export default RegisterMain;
