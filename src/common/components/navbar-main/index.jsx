import React from "react";
import "./navbar-main.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OffersIcon from "../../assets/icons/offers";

const NavbarMain = () => {
    return (
        <Navbar bg='primary' variant='dark'>
            <Container>
                <div className='nav-main'>
                    <div className='left-part'>
                        <Nav className='me-auto'>
                            <Nav.Link
                                href='#/samsung'
                                className='custom-nav-link'
                            >
                                Samsung Mobile
                            </Nav.Link>
                            <Nav.Link
                                href='#/iPhones'
                                className='custom-nav-link'
                            >
                                iPhones
                            </Nav.Link>
                            <Nav.Link href='#/Mi' className='custom-nav-link'>
                                Mi Phones
                            </Nav.Link>
                            <Nav.Link href='#/Oppo' className='custom-nav-link'>
                                Oppo Phones
                            </Nav.Link>
                            <Nav.Link
                                href='#/Oneplus'
                                className='custom-nav-link'
                            >
                                Oneplus Phones
                            </Nav.Link>
                            <Nav.Link href='#/Vivo' className='custom-nav-link'>
                                Vivo Phones
                            </Nav.Link>
                            <Nav.Link
                                href='#/Others'
                                className='custom-nav-link'
                            >
                                Others
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='right-part'>
                        <div className='offers-text'>
                            <OffersIcon />
                            <span className='mx-1'>Offers</span>
                        </div>
                        <div>
                            <button className='sub-btn py-1 px-2 mx-3'>
                                New
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );

    //<h1 style={{ backgroundColor: "#1B49EA" }}>This is main Navbar</h1>;
};

export default NavbarMain;
