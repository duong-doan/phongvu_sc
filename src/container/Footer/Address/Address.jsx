import React from 'react';
import './Address.scss'

const Address = () => {
    return (
        <div className="footer__address-wrap">
            <div className="footer__address">
                <div className="footer__address-name">
                    <h3>Công ty cổ phần thương mại - dịch vụ Phong Vũ</h3>
                    <p>
                        © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ <br />
                    Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày 30 tháng 05 năm 2007
                </p>
                </div>
                <div className="footer__address-location">
                    <div className="location-item">
                        <h5>Địa chỉ trụ sở chính</h5>
                        <p>
                            Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh
                </p>
                    </div>
                    <div className="location-item">
                        <h5>Văn phòng điều hành miền Bắc</h5>
                        <p>
                            Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội
                </p>
                    </div>
                    <div className="location-item">
                        <h5>Văn phòng điều hành miền Nam</h5>
                        <p>
                            Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường 6, Quận 3, TP. Hồ Chí Minh
                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
