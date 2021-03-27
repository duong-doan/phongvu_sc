import React, { useEffect, useState } from 'react'

import './ShowDetail.scss'
import ButtonContact from '../../../components/UI/buttonContact/ButtonContact'

const ShowDetail = (props) => {

    useEffect(() => {
        const imgShowEl = document.querySelector('.show__img--big')
        const imgHoverEl = document.querySelectorAll('.show__img--discribe img')
        if (imgHoverEl && imgShowEl) {
            for (let i = 0; i < imgHoverEl.length; i++) {
                imgHoverEl[i].addEventListener('mouseover', () => {
                    imgShowEl.setAttribute('src', `${imgHoverEl[i].getAttribute('src')}`)
                    imgHoverEl[i].setAttribute('style', 'border: 1px solid blue')
                })
                imgHoverEl[i].addEventListener('mouseout', () => {
                    imgHoverEl[i].setAttribute('style', 'border: none')
                })
            }
        }
    })

    let imgDetail = <p>loading</p>
    if (props.imageFull) {
        imgDetail = (
            <div className="show__img--discribe">
                {props.imageFull.map(urlImg => {
                    return <img key={urlImg} src={urlImg} alt="" />
                })}
            </div>
        )
    }
    return (
        <div className="productDetail-page__show">
            <div className="show__img" >
                <img className="show__img--big" src={props.image} alt="" />
                {imgDetail}
            </div>
            <div className="show__info">
                <h3>{props.name}</h3>
                <p>Thương hiệu <span className="show__info--brand">ASUS</span></p>
                <p>SKU: 19060290</p>
                <span className="show__info--onlyLeft">Chỉ còn 0 sản phẩm</span><br />
                <span className="show__info--price">{props.price}</span>
                <ButtonContact show />

                <div style={{
                    borderTop: "1px dashed #999",
                    width: '100%',
                    height: '1px'
                }}></div>

                <ul>
                    <h5>Khuyến mãi liên quan</h5>
                    <li >Nhập mã <strong>PV300</strong> giảm thêm 5% tối đa 300.000đ khi thanh toán qua VNPAY-QR.<span>Xem chi tiết</span></li>
                    <li >[Thông báo] Lưu ý khách hàng về ảnh hưởng vận chuyển bởi dịch Covid<span>Xem chi tiết</span></li>
                </ul>
            </div>
        </div>
    )
}

export default ShowDetail