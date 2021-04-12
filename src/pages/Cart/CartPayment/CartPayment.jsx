import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CartPayment.scss'

const CartPayment = ({ cart }) => {

    const format = (n) => {
        return n.toLocaleString().replace('.', '.').replace(/\d{3}(?=(\d{3})*,)/g)
    }

    let totalPrice = 0;

    cart.map(item => {
        return totalPrice += item.price
    })

    return (
        <div className="cartPay">
            <h2>Thanh toán</h2>
            <table>
                <tr>
                    <td className="payment__title">Tạm tính</td>
                    <td className="payment__normal">{format(totalPrice)} đ</td>
                </tr>
                <tr>
                    <td className="payment__title">Phí vận chuyển</td>
                    <td className="payment__normal">0 đ</td>
                </tr>
                <tr>
                    <td className="payment__title">Khuyến mãi</td>
                    <td className="payment__normal">0 đ</td>
                </tr>
                <tr>
                    <td className="payment__title">Thành tiền</td>
                    <td className="payment__total">{format(totalPrice)} đ</td>
                </tr>
            </table>
            <button className="btn__pay">Thanh toán</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.CartReducer.cart
    }
}

export default connect(mapStateToProps, null)(CartPayment)
