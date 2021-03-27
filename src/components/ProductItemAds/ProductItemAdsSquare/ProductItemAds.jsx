import React from 'react';
import './ProductItemAds.scss';

const ProductItemAds = (props) => {
    return (
        <div className="main__banner__product-item-ads product__item-ads">
            <img src={props.url} alt="" />
        </div>
    )
}

export default ProductItemAds
