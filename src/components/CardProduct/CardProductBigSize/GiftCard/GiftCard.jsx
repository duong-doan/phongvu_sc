import React from 'react';
import './GiftCard.scss'

const GiftCard = (props) => {
    let gift = null
    if (props.url) {
        const arrGift = props.url;
        gift = (
            <div className="card_product-gift">
                {arrGift.length === 0 ? null : <span>QUÀ TẶNG</span>}
                {arrGift.map(item => {
                    return <img key={item} className="gift-img" src={item} alt="" />
                })}
            </div>
        )
    }

    return gift

}

export default GiftCard
