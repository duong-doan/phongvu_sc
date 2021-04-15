import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ModalBackdrop from '../../../components/UI/Modal/Modal';
import './CartPayment.scss'

const CartPayment = ({ cart, listUsers }) => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState('')

    const handleCloseModal = () => {
        setShow(false)
    }

    const format = (n) => {
        return n.toLocaleString().replace('.', '.').replace(/\d{3}(?=(\d{3})*,)/g)
    }

    const handleClickPay = () => {
        if (listUsers.length === 0) {
            setShow(true)
            const handleRightModal = () => {
                document.location.href = 'http://localhost:3000/phongvu_app#/login'
            }
            setModal(
                <ModalBackdrop
                    title="Đăng nhập để mua hàng bạn nhé!"
                    right="Đăng nhập"
                    show={show}
                    handleClose={handleCloseModal}
                    handleRight={handleRightModal}
                    displayLeft={{ display: 'none' }}
                    displayRight={{ fontSize: '1.6rem' }}
                    displayTitle={{ fontSize: '3rem' }}
                    displayBody={{ fontSize: '1.4rem' }}
                />
            )
        } else {
            setShow(true)
            const handleRightModal = () => {
                document.location.href = 'http://localhost:3000/phongvu_app#/'
            }
            setModal(
                <ModalBackdrop
                    title="Cảm ơn quý khách chúng tôi sẽ liên hệ sớm nhất có thể "
                    left="Tiếp tục mua sắm"
                    right="Quay lại trang chủ"
                    show={show}
                    handleClose={handleCloseModal}
                    handleRight={handleRightModal}
                    displayLeft={{ display: 'none' }}
                    displayRight={{ fontSize: '1.6rem' }}
                    displayTitle={{ fontSize: '3rem' }}
                    displayBody={{ fontSize: '1.4rem' }}
                />
            )
        }

    }

    const totalPrice = cart.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    return (
        <Fragment>
            {modal}
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
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.CartReducer.cart,
        listUsers: state.LoginReducer.users
    }
}

export default connect(mapStateToProps, null)(CartPayment)
