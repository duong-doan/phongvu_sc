import React from 'react';
import './ButtonContact.scss'

const ButtonContact = (props) => {
    return props.show ?
        <button className="btnContact"
            onClick={props.addCart}
        >Thêm vào giỏ hàng</button>
        : null
}

export default ButtonContact
