import React, { useEffect, useState } from 'react';
import * as TypeActions from '../../../constant/TypeActions'
import './Toolbar.scss';

import logo from '../../../assets/images/logo-full.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Toolbar = ({ dataProduct, isShowToolbar, showSearch, pushDataSearch }) => {
    const [value, setValue] = useState('')

    const handleSearchBtn = () => {
        pushDataSearch(dataProduct, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        const toolbarEl = document.querySelector('.header__toolbar');
        const imgEl = document.querySelector('.header__toolbar__logo img')
        window.onscroll = function () {
            if (toolbarEl && imgEl) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    toolbarEl.classList.add('sticky-menu')
                }
            }
        }
    }, [])


    return (isShowToolbar ?
        <div className='header__toolbar' >
            <div className="header__toolbar__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            {
                showSearch ? <div className="header__toolbar__search">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Nhập từ kháo cần tìm"
                        />
                        <Link to="/search">
                            <button className="toolbar__search-wrap" onClick={handleSearchBtn}>
                                <i className="fas fa-search"></i>
                            </button>
                        </Link>
                    </form>
                </div> : null
            }
            <div className="header__toolbar__item">
                <Link>
                    <div className="toolbar__item-voucher">
                        <i className="fas fa-tag"></i>
                        <span className="toolbar__item-title">Khuyến mãi</span>
                    </div>
                </Link>

                <Link>
                    <div className="toolbar__item-order">
                        <i className="fas fa-clipboard-list"></i>
                        <span className="toolbar__item-title">Đơn hàng</span>
                    </div>
                </Link>

                <Link to='/login'>
                    <div className="toolbar__item-login">
                        <i className="far fa-user-circle"></i>
                        <span className="toolbar__item-title">Đăng nhập</span>
                    </div>
                </Link>

                <Link to="/cart">
                    <div className="toolbar__item-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="toolbar__item-title">Giỏ hàng</span>
                    </div>
                </Link>
            </div>
        </div> : null
    );
}

const mapStateToProps = state => {
    return {
        dataProduct: state.DataReducer.rootData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushDataSearch: (data, valueInput) => dispatch({ type: TypeActions.PUSH_DATA_SEARCH, data, valueInput })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);