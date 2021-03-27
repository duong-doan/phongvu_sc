import React from 'react'

import bgImg1 from '../../../../assets/images/cart_product/cart_product_big_size/bg-cart-big-size-laptop.jpg'
import bgImg2 from '../../../../assets/images/cart_product/cart_product_big_size/bg-cart-big-size-wifi.png'

const WrapCard = (props) => {

    return (
        <div>
            <img src={props.isClickedBtn ? bgImg1 : bgImg2} alt="" />
            {/* <img src={bgImg2} alt="" /> */}
            {props.children}
        </div>
    )
}

export default WrapCard
