import React from 'react';
import './Info.scss';

const Info = () => {
    return (
        <div className="footer__list">
            <ul className="footer__list-help">
                <h4>Hỗ trợ khách hàng</h4>
                <li className="list-help-itemLink">Thẻ ưu đãi</li>
                <li className="list-help-itemLink">Trung tâm bảo hành</li>
                <li className="list-help-itemLink">Thanh toán và giao hàng</li>
                <li className="list-help-itemLink">Dịch vụ sửa chữa và bảo trì</li>
                <li className="list-help-itemLink">Doanh nghiệp thân thiết</li>
            </ul>

            <ul className="footer__list-rule">
                <h4>Chính sách Mua hàng và Bảo hành</h4>
                <li className="list-rule-itemLink">Quy định chung</li>
                <li className="list-rule-itemLink">Chính sách Bảo mật Thông tin</li>
                <li className="list-rule-itemLink">Chính sách Vận chuyển và Lắp đặt</li>
                <li className="list-rule-itemLink">Chính sách đổi trả và hoàn tiền</li>
                <li className="list-rule-itemLink">Quy định giá cả và hình thức thanh toán</li>
                <li className="list-rule-itemLink">Chính sách trả góp</li>
            </ul>

            <ul className="footer__list-info">
                <h4>Thông tin Phong Vũ</h4>
                <li className="list-info-itemLink">Giới thiệu Phong Vũ</li>
                <li className="list-info-itemLink">Thông tin liên hệ</li>
                <li className="list-info-itemLink">Hệ thống Showroom</li>
                <li className="list-info-itemLink">Hỏi đáp</li>
                <li className="list-info-itemLink">Tin công nghệ</li>
                <li className="list-info-itemLink">Tuyển dụng</li>
            </ul>

            <ul className="footer__list-social">
                <h4>Cộng đồng Phong Vũ</h4>
                <li className="list-social-itemLink">
                    <i class="fab fa-facebook-square" style={{ color: 'blue' }}></i>
                    Phong Vũ Việt Nam</li>
                <li className="list-social-itemLink">
                    <i class="fab fa-youtube" style={{ color: 'red' }}></i>
                    Phong Vũ Media</li>
                <li className="list-social-itemLink">
                    <i class="fas fa-user-friends" style={{ color: 'blueviolet' }}></i>
                    Phong Vũ Hội</li>
                <li className="list-social-itemLink">
                    <i class="fas fa-phone-alt" style={{ color: 'orange' }}></i>
                    Gọi Mua hàng: 1800 6867 (miễn phí)</li>
                <li className="list-social-itemLink">
                    <i class="fas fa-phone-alt" style={{ color: 'orange' }}></i>
                    Gọi Chăm sóc: 1800 6865 (miễn phí)</li>
                <li className="list-social-itemLink">
                    <i class="far fa-comments" style={{ color: 'orange' }}></i>
                    Chat với tư vấn viên</li>
            </ul>

            <ul className="footer__list-email">
                <h4>Email liên hệ</h4>
                <li className="list-email-itemLink">
                    Hỗ trợ Khách hàng:<br />
                    <span>cskh@phongvu.vn</span>
                </li>
                <li className="list-email-itemLink">
                    Liên hệ báo giá:<br />
                    <span>baogia@phongvu.vn</span>
                </li>
                <li className="list-email-itemLink">
                    Hợp tác phát triển:<br />
                    <span>hoptac@phongvu.vn</span>
                </li>
            </ul>
        </div >
    )
}

export default Info
