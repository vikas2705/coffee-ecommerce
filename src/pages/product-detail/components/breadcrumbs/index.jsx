import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./breadCrumbs.css";

const Breadcrumbs = props => {
    const { productName } = props;
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href='#/'>Samsung</Breadcrumb.Item>
            <Breadcrumb.Item href='#/'>Mobile Phone</Breadcrumb.Item>
            <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
