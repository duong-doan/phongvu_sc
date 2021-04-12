import React, { Fragment } from 'react';
import './Login.scss';
import GoogleLogin from 'react-google-login';
import * as TypeActions from '../../constant/TypeActions';
import { connect } from 'react-redux';
import Toolbar from '../../container/Header/Toolbar/Toolbar';

const Login = ({ onGgLogin }) => {

    const resGoogle = (res) => {
        onGgLogin(res.profileObj.name, res.profileObj.email)
        document.location.href = 'http://localhost:3000/phongvu_app#/'
    }

    return (
        <Fragment>
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
                            onSuccess={resGoogle}
                            onFailure={resGoogle}
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

const mapDispatchToProps = dispatch => {
    return {
        onGgLogin: (name, email) => dispatch({ type: TypeActions.GG_LOGIN, name, email })
    }
}

export default connect(null, mapDispatchToProps)(Login)
