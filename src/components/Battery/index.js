import React from "react";
import './styles.css'

const BatteryRender = ({ productValue }) => {
    let productCount = '';
    const parts = [];

    const productCountToProperies = {
        'none': {
            count: 0,
            cssClass: ''
        },
        'extraLittle': {
            count: 1,
            cssClass: 'battery-red'
        },
        'little': {
            count: 2,
            cssClass: 'battery-yellow'
        },
        'normal': {
            count: 3,
            cssClass: 'battery-dark-green'
        },
        'many': {
            count: 4,
            cssClass: 'battery-green'
        }
    }

    if (productValue < 1) {
        productCount = 'none';
    } else if (productValue >= 1 && productValue <= 3) {
        productCount = 'extraLittle';
    } else if (productValue >= 4 && productValue <= 5) {
        productCount = 'little';
    } else if (productValue >= 6 && productValue <= 9) {
        productCount = 'normal';
    } else if (productValue >= 10) {
        productCount = 'many';
    }

    const product = productCountToProperies[productCount];


    for (let i = 0; i < product.count; i++) {
        parts.push(product.cssClass);
    }

    return (
        <React.Fragment>
            {parts.map((cssClass, index) => <div key={index} className={cssClass} />)}
        </React.Fragment>
    )
}

export default BatteryRender;
