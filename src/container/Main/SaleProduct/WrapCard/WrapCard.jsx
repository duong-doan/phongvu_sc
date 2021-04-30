import React from 'react'

import bgImg2 from '../../../../assets/images/cart_product/cart_product_big_size/bg-cart-big-size-wifi.png'

const WrapCard = (props) => {

    return (
        <div>
            <img src={props.isClickedBtn ? 'https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/4/16/20210416_9b9bc589-73e9-4b3f-bbb8-5ba9e0495b31.jpg' : bgImg2} alt="" />
            {props.children}
        </div>
    )
}

export default WrapCard
