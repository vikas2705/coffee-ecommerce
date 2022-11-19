import React from "react";
import "./product-detail-section.css";
import checkIcon from "../../../../common/assets/icons/check-icon.svg";
import bankIcon from "../../../../common/assets/icons/bank-icon.svg";
import truckIcon from "../../../../common/assets/icons/truck.svg";
import returnIcon from "../../../../common/assets/icons/return.svg";
import cancellationIcon from "../../../../common/assets/icons/cancellation.svg";
import OffersIcon from "../../../../common/assets/icons/offers";
import ColorPicker from "../color-picker";
import Form from "react-bootstrap/Form";
import CartIcon from "../../../../common/assets/icons/cart";

const ProductDetailSection = () => {
    return (
        <div className='product-section-main'>
            <h1 className='product-title'>
                Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)
            </h1>
            <div className='key-features section-gap'>
                <p className='features-heading mb-2'>Key Features</p>
                <ul>
                    <li>
                        <img src={checkIcon} alt='check icon' />
                        <span className='mx-2'>
                            Capacity 6 kg :Suitable for bachelors & couples
                        </span>
                    </li>
                    <li>
                        <img src={checkIcon} alt='check icon' />
                        <span className='mx-2'>
                            Warranty: 4 years on product, 4 years on motor 800
                            rpm:
                        </span>
                    </li>
                    <li>
                        <img src={checkIcon} alt='check icon' />
                        <span className='mx-2'>
                            Higher the spin speed, faster the drying time
                        </span>
                    </li>
                </ul>
            </div>

            <div className='color-picker section-gap'>
                <p className='color-heading'>Choose Color</p>
                <div className='d-flex align-items-center justify-space-between'>
                    <ColorPicker color='black' active />
                    <ColorPicker color='white' />
                    <ColorPicker color='grey' />
                    <ColorPicker color='blue' />
                    <ColorPicker color='silver' />
                </div>
            </div>

            <div className='quantity section-gap d-flex align-items-center'>
                <label>Select Qty.</label>
                <Form.Select
                    aria-label='Default select example'
                    className='custom-width-quantity'
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </Form.Select>
            </div>

            <div className='prices-and-taxes section-gap'>
                <div className='top-part d-flex align-items-center justify-space-between'>
                    <div className='current-price'>₹20,990</div>
                    <div className='original-price mx-2'>₹23,990</div>
                    <div className='discount mx-1'>10% off</div>
                </div>
                <div className='bottom-part'>Inclusive of all taxes</div>
            </div>

            <div className='other-details section-gap'>
                <div>
                    <img src={bankIcon} alt='bank icon' />
                    <span className='mx-3'>
                        No cost EMI ₹1,750/month. Standard EMI also available.
                        T&C
                    </span>
                </div>
                <div>
                    <OffersIcon color='black' height='16' width='16' />
                    <span className='mx-3'>
                        Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                        Credit Card. T&C
                    </span>
                </div>
            </div>

            <div className='add-to-cart section-gap'>
                <button className='add-to-card-btn btn flex align-items-center'>
                    <CartIcon color='white' />
                    <span className='mx-3'>Add to Cart</span>
                </button>
            </div>

            <div className='section-gap quick-policies d-flex justify-space-between align-items-center'>
                <div className='d-flex align-items-start '>
                    <img src={truckIcon} alt='truck icon' />
                    <div className='mx-2'>
                        <span>Shipping Fee</span>
                        <div className='policy-value'>FREE</div>
                    </div>
                </div>
                <div className='d-flex align-items-start mx-3'>
                    <img src={returnIcon} alt='return icon' />
                    <div className='mx-2'>
                        <span>Return Policy</span>
                        <div className='policy-value'>30 DAYS</div>
                    </div>
                </div>
                <div className='d-flex align-items-start  mx-3'>
                    <img src={cancellationIcon} alt='cancellation icon' />
                    <div className='mx-2'>
                        <span>Cancellation</span>
                        <div className='policy-value'>ALLOWED</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSection;
