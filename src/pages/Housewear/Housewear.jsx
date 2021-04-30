import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct';
import Toolbar from '../../container/Header/Toolbar/Toolbar';
import './Housewear.scss';

const Housewear = (props) => {
    const dataHousewear = props.dataHousewear.filter(product => product.idCategory === 'house02')

    return (
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="housewear">
                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/24/20210324_7fe00f33-d1cf-4cd0-a18f-1fb42b35f081.png" alt="" />
                <div className="housewear__wrap">
                    <div className="housewear__wrap__policy">
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/24/20210324_3a0a0945-fb72-4272-b647-f8a9c4ccf96b.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/24/20210324_d878389f-ef2c-4947-b24e-bb99f63b560b.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/24/20210324_521cef2d-de60-411a-ab9b-9e0e1234ae78.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/24/20210324_99702896-d43b-4263-bd5d-937e50d0999b.png" alt="" />
                    </div>
                    <ContainerProduct title="Sản phẩm dành cho bạn">
                        {
                            dataHousewear.map(product => {
                                return (
                                    <Link to={`/housewearDetail/${product.id}`} key={product.id}>
                                        <CartProductBigSize
                                            url={product.image}
                                            urlGift={product.gift}
                                            name={product.name}
                                            price={product.price}
                                            discountPrice={product.discountPrice}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </ContainerProduct>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        dataHousewear: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(Housewear)
