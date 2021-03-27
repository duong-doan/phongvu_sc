import React, { Fragment, useState } from 'react';
import './CardProductBigSize.scss'

import ButtonContact from '../../UI/buttonContact/ButtonContact'
import GiftCard from './GiftCard/GiftCard';

const CartProductBigSize = (props) => {
    const [showBtn, setShowBtn] = useState(false)
    let price = null
    if (showBtn) {
        price = null
    } else {
        price = (
            <Fragment>
                <div className="card_big_size-newPrice">
                    <span className="newprice">{props.price}</span>
                    <i className="fas fa-truck"></i>
                </div>
                <div className="card_big_size-oldPrice">
                    <span className="oldPrice">{props.discountPrice}</span>
                    <span className="discount_percent">{props.discount}</span>
                </div>
                <GiftCard url={props.urlGift} />
            </Fragment>
        )
    }

    return (
        <div className="card_product_big_size">
            <div className="card_product_big_size-sub">
                <img className="card_product_big_size-img" src={props.url} alt="" />
                <span className="card_big_size-name">{props.name}</span>
                <ButtonContact show={showBtn} />
                {price}
            </div>
        </div>
    )
}

export default CartProductBigSize
