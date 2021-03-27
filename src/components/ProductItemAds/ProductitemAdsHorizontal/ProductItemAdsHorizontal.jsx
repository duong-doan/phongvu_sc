import React from 'react';
import './ProductItemAdsHorizontal.scss'

const ProductItemAdsHorizontal = (props) => {
    return (
        <div className="main__banner__product-item-adsHorizon">
            <div className="product-item-adsHorizon-wrapimg">
                <img src={props.url} alt="" />
            </div>
            <h3>{props.name}</h3>
            <span>{props.desc}</span>
        </div>
    )
}

export default ProductItemAdsHorizontal
