import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as TypeActions from '../../../constant/TypeActions';
import './Toolbar.scss';

const Toolbar = ({ dataProduct, isShowToolbar, showSearch, pushDataSearch }) => {
  const [value, setValue] = useState('')

  const getUserLocal = JSON.parse(localStorage.getItem('users'))

  const history = useHistory()

  const handleLogout = () => {
    document.location.reload()
  }

  useEffect(() => {
    const loginEl = document.querySelector('.toolbar__item-login')
    const logoutEl = document.querySelector('.logout');
    if (loginEl && logoutEl) {
      loginEl.addEventListener('mouseover', () => {
        logoutEl.setAttribute('style', 'display: block;')
      })
      loginEl.addEventListener('mouseout', () => {
        logoutEl.setAttribute('style', 'display: none;')
      })
    }
  })

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

  const handleSubmit = (e) => {
    e.preventDefault();
    pushDataSearch(dataProduct, value)
    history.push('/search')
  }

  return (
    isShowToolbar ?
      <div className='header__toolbar' >
        <div className="header__toolbar__logo">
          <Link to="/">
            <img src='https://phongvu.vn/phongvu/logo-full.svg' alt="logo" />
          </Link>
        </div>
        {
          showSearch ? <div className="header__toolbar__search">
            <form onSubmit={handleSubmit}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Nh???p t??? kh??o c???n t??m"
              />
              <button className="toolbar__search-wrap" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
            : null
        }
        <div className="header__toolbar__item">
          <Link>
            <div className="toolbar__item-voucher">
              <i className="fas fa-tag"></i>
              <span className="toolbar__item-title">Khuy???n m??i</span>
            </div>
          </Link>

          <Link to="/account">
            <div className="toolbar__item-order">
              <i className="fas fa-clipboard-list"></i>
              <span className="toolbar__item-title">????n h??ng</span>
            </div>
          </Link>

          {
            getUserLocal.length !== 0 ?
              <Fragment>
                <div className="toolbar__item-login">
                  <i className="far fa-user-circle"></i>
                  <span className="toolbar__item-title">{getUserLocal[0].name}</span>
                  {/* log out */}
                  <div className="logout">
                    <div className="logout__item">
                      <i className="far fa-user-circle"></i>
                      <span>{getUserLocal[0].name}</span>
                    </div>
                    <div className="logout__item">
                      <i className="far fa-envelope"></i>
                      <span>{getUserLocal[0].email}</span>
                    </div>
                    <button className="logout__btn" onClick={handleLogout}>????ng xu???t</button>
                  </div>
                </div>
              </Fragment>
              :
              <Link to='/login'>
                <div className="toolbar__item-login">
                  <i className="far fa-user-circle"></i>
                  <span className="toolbar__item-title">????ng nh???p</span>
                </div>
              </Link>
          }

          <Link to="/cart">
            <div className="toolbar__item-cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="toolbar__item-title">Gi??? h??ng</span>
            </div>
          </Link>
        </div>
      </div> : null
  );
}

const mapStateToProps = state => {
  return {
    dataProduct: state.DataReducer.rootData,
    loginUser: state.LoginReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pushDataSearch: (data, valueInput) => dispatch({ type: TypeActions.PUSH_DATA_SEARCH, data, valueInput })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);