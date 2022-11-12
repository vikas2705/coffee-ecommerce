import React from "react";
import "./footer-top.css";
import Wallet from "../../assets/images/wallet.svg";
import SecurePay from "../../assets/images/secure-pay.svg";
import Contact from "../../assets/images/contact.svg";
import Calculator from "../../assets/images/calculator.svg";

const features = [
    {
        icon: Wallet,
        title: "100% Secure Payment",
        subTitle: "Moving your card details to a much more secured place",
    },
    {
        icon: SecurePay,
        title: "Trust pay",
        subTitle: "Payment Protection. Easy Return Policy",
    },
    {
        icon: Contact,
        title: "Help Center",
        subTitle:
            " Look no further. Browse our FAQs or submit your query here.",
    },
    {
        icon: Calculator,
        title: "Easy Installment",
        subTitle:
            "Pay for your purchase in Easy EMI at very low interest rates",
    },
];

const FooterTop = () => {
    return (
        <section className='footer-top-main'>
            <div className='container'>
                <div className='row'>
                    {features.map(feature => {
                        return (
                            <div
                                className='col-md-3 feature-container'
                                key={feature.title}
                            >
                                <div>
                                    <img
                                        src={feature.icon}
                                        alt='icon of the feature'
                                        className='feature-image'
                                    />
                                </div>

                                <h3 className='feature-title'>
                                    {feature.title}
                                </h3>
                                <p className='feature-subtitle'>
                                    {feature.subTitle}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FooterTop;
