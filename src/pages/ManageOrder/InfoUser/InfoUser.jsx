import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import TextField from '../../Login/TextField/TextField';
import * as Yup from 'yup'
import './InfoUser.scss'

const InfoUser = () => {
    const getUserLocal = JSON.parse(localStorage.getItem('users'))

    const validateForm = Yup.object({
        name: Yup.string()
            .max(15, 'Nhập tối đa 15 kí tự')
            .min(4, 'Nhập họ và tên của bạn')
            .required('Nhập họ và tên của bạn'),
        email: Yup.string()
            .email('Nhập chưa đúng định dạng email')
            .required('Nhập lại email'),
        phone: Yup.number()
            .required('Nhập số điện thoại của bạn')
    })

    return (
        <div className="infoUser">
            <Formik
                initialValues={{
                    name: getUserLocal.length === 0 ? '' : getUserLocal[0].name,
                    email: getUserLocal.length === 0 ? '' : getUserLocal[0].email,
                    phone: ''
                }}
                validationSchema={validateForm}
            >
                {() => (
                    <Form>
                        <TextField
                            name="name"
                            label="Họ và tên"
                            type="text"
                            style=" 50%"

                        />
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            style=" 50%"

                        />
                        <TextField
                            name="phone"
                            label="Số điện thoại"
                            type="number"
                            style=" 50%"

                        />
                        <button>Cập nhật</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default InfoUser
