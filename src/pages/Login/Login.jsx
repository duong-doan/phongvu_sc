import React, { Fragment, useEffect, useState } from 'react';
import './Login.scss';
import GoogleLogin from 'react-google-login';
import * as TypeActions from '../../constant/TypeActions';
import { connect } from 'react-redux';
import Toolbar from '../../container/Header/Toolbar/Toolbar';
import ModalBackdrop from '../../components/UI/Modal/Modal';

const Login = ({ onGgLogin }) => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState('');

    const getUserLocal = JSON.parse(localStorage.getItem('users'))

    const handleCloseModal = () => setShow(false);

    const handleRightModal = () => {
        document.location.href = 'http://localhost:3000/phongvu_app#/'
    }

    useEffect(() => {
        if (getUserLocal) {
            setShow(true)
            setModal(
                <ModalBackdrop
                    title={`Chào mừng ${getUserLocal[0].name} đến với Phong Vũ`}
                    right="Click để tiếp tục"
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
    })
    return (
        <Fragment>
            {modal}
            <Toolbar isShowToolbar />
            <div id="logreg-forms" >
                <form className="form-signin">
                    <h1 className="h1 mb-3 " style={{ textAlign: 'center' }}>
                        Sign in</h1>
                    <div className="social-login">
                        <GoogleLogin
                            className="gg-btn"
                            clientId="885688104318-bhnat07al4e18eimcv7mivjf0sl1k76n.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={(res) => {
                                onGgLogin(res.profileObj.name, res.profileObj.email)
                            }}
                            onFailure={(res) => {
                                onGgLogin(res.profileObj.name, res.profileObj.email)
                            }}
                            cookiePolicy={'single_host_origin'}
                        />
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', margin: '6px 0', fontWeight: '500ss' }}>OR</p>
                    </div>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        autofocus=""
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required=""
                    />
                    <input
                        type="confirm-password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Confirm password"
                        required=""
                    />

                    <button className="btn btn-success btn-block" type="submit" style={{ fontSize: '1.4rem' }}>
                        <i className="fas fa-sign-in-alt"></i> Register
                    </button>
                </form>
            </div >
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        loginUser: state.LoginReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGgLogin: (name, email) => dispatch({ type: TypeActions.GG_LOGIN, name, email })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
