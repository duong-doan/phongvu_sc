import React from 'react';

import './ProductName.scss'

const ProductName = (props) => {
    return (
        <div className="productDetail-page__wrap--name">
            <div className="wrap__icon">
                <i className="fas fa-home"></i>
            </div>
            <i class="fas fa-arrow-right"></i>
            <div className="wrap__nameProduct">
                <span>{props.nameProduct}</span>
            </div>
        </div>
    )
}

export default ProductName
