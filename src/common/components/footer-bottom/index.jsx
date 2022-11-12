import React from "react";
import "./footer-bottom.css";
import { footerLinks } from "./constants/footerOptions";
import PaymentIcons from "../../assets/images/payment-icons.svg";
import AppDownload from "../../assets/images/app-download.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Youtube from "../../assets/images/youtube.svg";
import Instagram from "../../assets/images/instagram.svg";

const FooterBottom = () => {
    return (
        <section className='footer-bottom-main'>
            <div className='container'>
                <div className='row'>
                    <div className='left-main col-md-9'>
                        <div className='left-top'>
                            <div className='row'>
                                {footerLinks.map(footerLink => {
                                    return (
                                        <div className='col-md-3'>
                                            <h2 className='footer-list-heading'>
                                                {footerLink.heading}
                                            </h2>
                                            <ul>
                                                {footerLink.items.map(item => {
                                                    return (
                                                        <li className='footer-list-item'>
                                                            <a href='#/'>
                                                                {item}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='left-bottom'>
                            <img src={PaymentIcons} alt='all payment icons' />
                        </div>
                    </div>
                    <div className='right-main col-md-3'>
                        <div className='right-top'>
                            <h3 className='footer-right-subheading'>
                                Download our amazing app
                            </h3>
                            <div className='footer-right-icons'>
                                <img src={AppDownload} alt='download apps' />
                            </div>
                        </div>
                        <div className='right-bottom'>
                            <h3 className='footer-right-subheading'>
                                Connect us on
                            </h3>
                            <div className='footer-right-icons'>
                                <img src={Facebook} alt='Facebook icon' />
                                <img src={Twitter} alt='Twitter icon' />
                                <img src={Youtube} alt='Youtube icon' />
                                <img src={Instagram} alt='Instagram icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterBottom;
