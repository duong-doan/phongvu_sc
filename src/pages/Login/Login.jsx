import React, { Fragment, useEffect, useState } from 'react';
import * as TypeActions from '../../constant/TypeActions';
import { connect } from 'react-redux';
import { FastField, Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import './Login.scss';
import GoogleLogin from 'react-google-login';
import Toolbar from '../../container/Header/Toolbar/Toolbar';
import ModalBackdrop from '../../components/UI/Modal/Modal';
import TextField from './TextField/TextField';

const Login = ({ onGgLogin, onRegister }) => {
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

  const validate = Yup.object({
    name: Yup.string()
      .min(4, 'Nhập tên của bạn')
      .max(8, 'Nhập tối đa 8 kí tự')
      .required('Vui lòng nhập họ và tên'),
    email: Yup.string()
      .email('Nhập chưa đúng định dạng email')
      .required('Nhập lại email'),
    password: Yup.string()
      .min(8, 'Mật khẩu ít nhất 8 kí tự')
      .required('Nhập lại mật khẩu'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Nhập lại mật khẩu chưa đúng')
      .required('Nhập lại mật khẩu')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      onSubmit={(values) => {
        onRegister(values)
        setShow(true)
        setModal(
          <ModalBackdrop
            title={`Đăng kí tài khoản thành công, chào mừng bạn đến với Phong Vũ`}
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
      }}
      validationSchema={validate}
    >
      {formikProps => (
        <Fragment>
          {modal}
          <Toolbar isShowToolbar />
          <div id="logreg-forms" >
            <Form className="form-signin">
              <h1 className="h1 mb-3 " style={{ textAlign: 'center' }}>
                Đăng nhập</h1>
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
                <p style={{ textAlign: 'center', fontSize: '1.4rem', margin: '6px 0', fontWeight: '500ss' }}>Hoặc</p>
              </div>

              <TextField
                label="Tên đăng nhập"
                name="name"
                type="text"
                placeholder="VD: Dương Trần Đoàn"
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="VD: duongdoan@gmail.com"
              />

              <TextField
                label="Mật khẩu"
                name="password"
                type="password"
              />

              <TextField
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                type="password"
              />

              <button className="btn btn-success btn-block" type="submit" style={{ fontSize: '1.4rem' }}>
                <i className="fas fa-sign-in-alt"></i> Tạo tài khoản
              </button>
            </Form>
          </div >
        </Fragment>
      )}
    </Formik>
  )
}



const mapStateToProps = state => {
  return {
    loginUser: state.LoginReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGgLogin: (name, email, valueFormik) => dispatch({ type: TypeActions.GG_LOGIN, name, email, valueFormik }),
    onRegister: (valueFormik) => dispatch({ type: TypeActions.REGISTER, valueFormik })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
