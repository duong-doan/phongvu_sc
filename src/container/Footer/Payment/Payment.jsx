import React from 'react';
import './Payment.scss'

const Payment = () => {
    return (
        <div className="footer__payment">
            <div className="footer__payment-methodPayment">
                <h4>Phương thức thanh toán</h4>
                <ul>
                    <li><i className="fas fa-qrcode"></i><br />QR Code </li>
                    <li><i className="fas fa-money-bill"></i><br />Tiền mặt</li>
                    <li><i className="far fa-clock"></i><br />Trả góp</li>
                    <li><i className="far fa-credit-card"></i><br />Internet <br /> Banking</li>
                </ul>
            </div>
            <div className="footer__payment-listPayment">
                <h4>Danh sách các ngân hàng thanh toán online</h4>
                <img src="https://phongvu.vn/media/wysiwyg/phongvu/phongvu_v3/banklist.jpg" alt="" />
            </div>
        </div>
    )
}

export default Payment
