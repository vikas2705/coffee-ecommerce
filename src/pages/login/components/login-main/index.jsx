import React from "react";
import "./login-main.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const LoginMain = () => {
    return (
        <div className='login-main'>
            <div className='login-container'>
                <h1 className='main-heading'>Login to Continue 👋</h1>

                <FloatingLabel
                    controlId='floatingInput'
                    label='Email Address'
                    className='my-4'
                >
                    <Form.Control type='email' placeholder='name@example.com' />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingPassword'
                    label='Password'
                    className='my-4'
                >
                    <Form.Control type='password' placeholder='*******' />
                </FloatingLabel>

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
