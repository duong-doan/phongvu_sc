import React, { useState } from 'react';
import CardProductSmall from '../CardProduct/CardProductSmall/CardProductSmall';
import './BigCardWrapProduct.scss'

const BigCardWrapProduct = (props) => {
    let productSmall = <p>loading</p>

    if (props.dataCardSmall) {
        productSmall = (
            props.dataCardSmall.map(product => {
                return <CardProductSmall
                    key={product}
                    name={product.name}
                    subTitle={product.subTitle}
                    urlImg={product.urlImg} />
            })
        )
    }

    return (
        <div className="main__bigCardWrapProduct">
            <div className="bigCardWrapProduct-name">
                <h4>{props.title}</h4>
            </div>
            <div className="bigCardWrapProduct-product-item">
                <div className="wrap-img">
                    <img src={props.urlBanner} alt="" />
                </div>
                <div className="wrap-product-small">
                    {productSmall}
                </div>
            </div>
        </div>
    )
}

export default BigCardWrapProduct
