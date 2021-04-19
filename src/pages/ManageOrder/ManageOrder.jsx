import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Toolbar from '../../container/Header/Toolbar/Toolbar';
import InfoUser from './InfoUser/InfoUser';
import './ManageOrder.scss'
import Order from './Order/Order';

const ManageOrder = () => {
    return (
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="manageOrder__wrap">
                <div className="manageOrder">
                    <div className="manage__aside">
                        <ul>
                            <Link to="/account/infoUser">
                                <i className="far fa-user-circle"></i>
                                <li>Thong tin tai khoan</li>
                            </Link>
                            <Link to="/account/order">
                                <i className="fas fa-clipboard-list"></i>
                                <li>Quan li don hang</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="manage__list-order">
                        <Route path="/account/order" component={Order} />
                        <Route path="/account/infoUser" component={InfoUser} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ManageOrder
