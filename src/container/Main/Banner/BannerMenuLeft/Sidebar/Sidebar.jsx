import React from 'react'

import './Sidebar.scss'
import iconWash from '../../../../../assets/images/main__sidebar/main__sidebar-washing.webp'
import iconLaptop from '../../../../../assets/images/main__sidebar/main__sidebar-laptop.webp'
import iconTv from '../../../../../assets/images/main__sidebar/main__sidebar-tv.webp'
import iconPhone from '../../../../../assets/images/main__sidebar/main__sidebar-phone.webp'
import iconPc from '../../../../../assets/images/main__sidebar/main__sidebar-pc.webp'
import iconScreen from '../../../../../assets/images/main__sidebar/main__sidebar-screen.webp'
import iconAccessories from '../../../../../assets/images/main__sidebar/main__sidebar-accessories.webp'
import iconGame from '../../../../../assets/images/main__sidebar/main__sidebar-game.webp'
import iconCam from '../../../../../assets/images/main__sidebar/main__sidebar-cam.webp'
import iconMusic from '../../../../../assets/images/main__sidebar/main__sidebar-music.webp'
import iconCamPhone from '../../../../../assets/images/main__sidebar/main__sidebar-camphone.webp'
import iconPrint from '../../../../../assets/images/main__sidebar/main__sidebar-print.webp'
import iconWifi from '../../../../../assets/images/main__sidebar/main__sidebar-wifi.webp'
import iconInvest from '../../../../../assets/images/main__sidebar/main__sidebar-investment.webp'

const Sidebar = () => {
    return (
        <div className="main__sidebar">
            <ul>
                <li>
                    <img src={iconWash} />
                    <span>Điện máy - Điện gia dụng</span>
                </li>
                <li>
                    <img src={iconLaptop} />
                    <span>Laptop & Macbook</span>
                </li>
                <li>
                    <img src={iconTv} />
                    <span>Tivi - Màn hình TV</span>
                </li>
                <li>
                    <img src={iconPhone} />
                    <span>Điện thoại & Thiết bị thông minh</span>
                </li>
                <li>
                    <img src={iconPc} />
                    <span>PC - Máy tính đồng bộ</span>
                </li>
                <li>
                    <img src={iconScreen} />
                    <span>Màn hình máy tính</span>
                </li>
                <li>
                    <img src={iconAccessories} />
                    <span>Linh kiện máy tính</span>
                </li>
                <li>
                    <img src={iconGame} />
                    <span>Hi-End Gaming</span>
                </li>
                <li>
                    <img src={iconCam} />
                    <span>Phụ kiện & Thiết bị ngoại vi</span>
                </li>
                <li>
                    <img src={iconMusic} />
                    <span>Thiết bị âm thanh</span>
                </li>
                <li>
                    <img src={iconCamPhone} />
                    <span>Máy ảnh - Máy quay phim</span>
                </li>
                <li>
                    <img src={iconPrint} />
                    <span>Thiết bị văn phòng</span>
                </li>
                <li>
                    <img src={iconWifi} />
                    <span>Thiết bị mạng - An ninh</span>
                </li>
                <li>
                    <img src={iconInvest} />
                    <span>Khách hàng doanh nghiệp</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
