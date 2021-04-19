import React from 'react';
import { useField, ErrorMessage } from 'formik';
import './TextField.scss'

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="textField">
            <label className="label-control" htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                style={{
                    width: `${props.style}`
                }}
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}

export default TextField
