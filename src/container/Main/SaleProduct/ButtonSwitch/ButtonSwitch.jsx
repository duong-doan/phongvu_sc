import React from 'react'
import './ButtonSwitch.scss'

const ButtonSwitch = ({ isClickedBtn }) => {

    const switchBtnLaptop = (click) => {
        let laptopBtn = document.querySelector('.sale_product_buttonSwitch-laptop')
        let wifiBtn = document.querySelector('.sale_product_buttonSwitch-wifi')
        click = true
        isClickedBtn(click)
        if (laptopBtn.className.includes('active') === true) {
            laptopBtn.classList.remove('active')
            wifiBtn.classList.add('active')
        } else { }
    }

    const switchBtnWifi = (click) => {
        let laptopBtn = document.querySelector('.sale_product_buttonSwitch-laptop')
        let wifiBtn = document.querySelector('.sale_product_buttonSwitch-wifi')
        click = false;
        isClickedBtn(click)
        if (wifiBtn.className.includes('active') === true) {
            wifiBtn.classList.remove('active')
            laptopBtn.classList.add('active')
        } else { }
    }

    return (
        <div className="sale_product_buttonSwitch">
            <div className="sale_product_buttonSwitch-laptop" onClick={() => switchBtnLaptop()}>
                <h4>Laptop</h4>
                <span>Giảm đến 5.5 triệu</span>
            </div>
            <div className="sale_product_buttonSwitch-wifi active" onClick={() => switchBtnWifi()}>
                <h4>Wifi</h4>
                <span>Chỉ từ 760k</span>
            </div>
        </div>
    )
}

export default ButtonSwitch
