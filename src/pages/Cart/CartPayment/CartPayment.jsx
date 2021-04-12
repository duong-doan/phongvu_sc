import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CartPayment.scss'

const CartPayment = ({ cart, listUsers }) => {



    const format = (n) => {
        return n.toLocaleString().replace('.', '.').replace(/\d{3}(?=(\d{3})*,)/g)
    }

    const handleClickPay = () => {
        if (listUsers.length === 0) {
            alert('dang nhap de mua hang ban nhe')
            document.location.href = 'http://localhost:3000/phongvu_app#/login'
        } else {
            alert("cam on ban")
        }
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
            <button className="btn__pay" onClick={handleClickPay}>Thanh toán</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.CartReducer.cart,
        listUsers: state.LoginReducer.users
    }
}

export default connect(mapStateToProps, null)(CartPayment)
