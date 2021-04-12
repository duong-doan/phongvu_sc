import React from 'react';
import { connect } from 'react-redux';
import './CartItem.scss'

const CartItem = ({ deleteProduct, image, name, price, increase, decrease, amount, cart }) => {
    const format = (n) => {
        return n.toLocaleString().replace('.', '.').replace(/\d{3}(?=(\d{3})*,)/g)
    }

    return (
        <div className="cartPage__productItem">
            <img src={image} alt="" />
            <h6>{name}</h6>
            <div className="productItem__interactive">
                <button className="interactive--sub" disabled={amount <= 1 ? true : false} onClick={decrease}>-</button>
                <span className="interactive--count">{amount}</span>
                <button className="interactive--increase" onClick={increase}>+</button>
                <button className="fas fa-trash-alt" onClick={deleteProduct}></button>
            </div>
            <h5>{format(price)}đ</h5>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.CartReducer.cart,
    }
}



export default connect(mapStateToProps, null)(CartItem)
