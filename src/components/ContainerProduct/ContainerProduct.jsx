import React from 'react'

import './ContainerProduct.scss'
import { Link } from 'react-router-dom'

const ContainerProduct = (props) => {

    return (
        <div className="containerProduct">
            <div className="containerProduct-wrap-name">
                <h4>{props.title}</h4>
                <Link to={props.urlPage}>
                    {props.showViewTotal ? <p>Xem tất cả <i className="fas fa-chevron-right"></i></p> : null}
                </Link>
            </div>
            <div className="containerProduct-wrap-product">
                {props.children}
            </div>
        </div>
    )
}

export default ContainerProduct
