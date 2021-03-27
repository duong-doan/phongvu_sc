import React, { useEffect } from 'react';
import './Toolbar.scss';

import logo from '../../../assets/images/logo-full.svg';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
    useEffect(() => {
        const toolbarEl = document.querySelector('.header__toolbar');
        const imgEl = document.querySelector('.header__toolbar__logo img')
        window.onscroll = function () {
            if (toolbarEl && imgEl) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    toolbarEl.classList.add('sticky-menu')
                    imgEl.setAttribute('src', 'data:image/png;base64,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')
                } else {
                    toolbarEl.classList.remove('sticky-menu')
                    imgEl.setAttribute('src', `${logo}`)
                }
            }
        }
    }, [])


    return (props.isShowToolbar ?
        <div className='header__toolbar' >
            <div className="header__toolbar__logo">
                <img src={logo} alt="logo" />
                <div className="sticky-menu__listProduct">
                    <i className="fas fa-bars"></i>
                    <span>Danh mục sản phẩm</span>
                </div>
            </div>
            <div className="header__toolbar__search">
                <input type="text" placeholder="Nhập từ kháo cần tìm" />
                <div className="toolbar__search-wrap">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header__toolbar__item">
                <div className="toolbar__item-voucher">
                    <i className="fas fa-tag"></i>
                    <span className="toolbar__item-title">Khuyến mãi</span>
                </div>

                <div className="toolbar__item-order">
                    <i className="fas fa-clipboard-list"></i>
                    <span className="toolbar__item-title">Đơn hàng</span>
                </div>
                <Link to='/login'>
                    <div className="toolbar__item-login">
                        <i className="far fa-user-circle"></i>
                        <span className="toolbar__item-title">Đăng nhập</span>
                    </div>
                </Link>

                <div className="toolbar__item-cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="toolbar__item-title">Giỏ hàng</span>
                </div>
            </div>
        </div> : null
    );
}

export default Toolbar;