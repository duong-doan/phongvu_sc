import React from 'react'
import './CardProductSmall.scss'

const CardProductSmall = (props) => {
    return (
        <div className="card-product-small">
            <h5>{props.name}</h5>
            <span>{props.subTitle}</span>
            <div className="card-product-small-wrap-img">
                <img src={props.urlImg} alt="" />
            </div>
        </div>
    )
}

export default CardProductSmall
