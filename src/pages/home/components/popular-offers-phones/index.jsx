import React from "react";
import PhoneProduct from "../../../../common/components/phone-product";
import "./popular-offers-phones.css";
import { SAMPLE_PHONES } from "../../../../common/constants/samplePhones";

const PopularOffersPhones = () => {
    return (
        <div className='popular-phones-main'>
            <div className='row'>
                {SAMPLE_PHONES.map(phone => {
                    return (
                        <div className='col'>
                            <PhoneProduct productData={phone} key={phone.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularOffersPhones;
