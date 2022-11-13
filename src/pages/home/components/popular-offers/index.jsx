import React from "react";
import "./popular-offers.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PopularOffersPhones from "../popular-offers-phones";
import { useNavigate } from "react-router-dom";

const PopularOffers = () => {
    const navigate = useNavigate();
    const goToProductList = () => {
        navigate("/products");
    };

    return (
        <div className='container popular-offers-main'>
            <div className='top-part'>
                <div className='heading'>
                    <h3 className='section-heading'>Popular Mobile Offers</h3>
                    <button
                        className='sub-btn py-1 px-2 mx-3'
                        onClick={goToProductList}
                    >
                        View All
                    </button>
                </div>
                <div className='tabs'>
                    <Tabs
                        defaultActiveKey='10000'
                        id='justify-tab-example'
                        className='mb-3'
                    >
                        <Tab
                            eventKey='10000'
                            title='Under Rs. 10,000'
                            className='custom-tab'
                        >
                            <PopularOffersPhones />
                        </Tab>
                        <Tab
                            eventKey='15000'
                            title='Rs. 10,000 - Rs. 15,000'
                            className='custom-tab'
                        >
                            <PopularOffersPhones />
                        </Tab>
                        <Tab
                            eventKey='25000'
                            title='Rs. 15,000 - Rs. 25,000'
                            className='custom-tab'
                        >
                            <PopularOffersPhones />
                        </Tab>
                        <Tab
                            eventKey='50000'
                            title='Rs. 25,000 - Rs. 50,000'
                            className='custom-tab'
                        >
                            <PopularOffersPhones />
                        </Tab>
                        <Tab
                            eventKey='50000Plus'
                            title='Above Rs. 50,000'
                            className='custom-tab'
                        >
                            <PopularOffersPhones />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default PopularOffers;
