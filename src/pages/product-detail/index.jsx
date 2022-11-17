import React from "react";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import ShareButton from "../../common/components/share-button";
import Breadcrumbs from "./components/breadcrumbs";
import ProductDetailSection from "./components/product-detail-section";
import "./product-detail.css";

const ProductDetail = () => {
    return (
        <div className='product-detail-main'>
            <Header />
            <NavbarMain />

            <div className=' body-main'>
                <div className='container'>
                    <Breadcrumbs />

                    <div className='product-section'>
                        <div className='row'>
                            <div
                                className='col-md-5'
                                style={{
                                    backgroundColor: "yellow",
                                    height: "100%",
                                }}
                            >
                                part 1
                            </div>
                            <div className='col-md-6'>
                                <ProductDetailSection />
                            </div>
                            <div className='col-md-1'>
                                <ShareButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default ProductDetail;
