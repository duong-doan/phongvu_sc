import React, { Fragment } from 'react'

import db from '../../db.json';
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct'
import './ProductSaleLaptops.scss'
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Toolbar from '../../container/Header/Toolbar/Toolbar';

const ProductSaleLaptops = (props) => {

    const data = props.dataLap.filter(product => product.idCategory === 'lap00')
        .slice(3, 8)

    return (
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="productSaleLaptops">
                <img className="productSaleLaptops__banner" src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_2166dc23-b353-484f-b037-ca2d6d0e0977.jpg" alt="" />
                <div className="productSaleLaptops__wrap--item">
                    <div className="productSaleLaptops__wrap--policy">
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_7dfb6b28-8036-40ac-9cd2-e041e4b6c195.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_48dbdcb1-3d70-43b2-8929-9e19eacbefd7.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_aec9913e-4f1e-4291-8184-1291d027325c.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_5065348b-7c57-4cfa-a111-891187681a8e.png" alt="" />
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_4cd57aac-6e28-4272-9f68-d8da177abc19.png" alt="" />
                    </div>
                    <img className="wrap--item--title" src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/18/20210218_2faeee2e-fb2e-4400-b9fe-7f7710187482.png" alt="" />
                    <ContainerProduct
                        title="Dành cho bạn"
                        urlPage="/listLaptop"
                        showViewTotal
                    >
                        {data.map(product => {
                            return <Link to={`/productDetail/${product.id}`} key={product.id}>
                                <CartProductBigSize
                                    url={product.image}
                                    name={product.name}
                                    price={product.price}
                                    discountPrice={product.discountPrice}
                                    urlGift={product.gift}
                                    brand={product.brand} />
                            </Link>
                        })}
                    </ContainerProduct>
                    <div className="wrap--item--promotions">
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/3/10/20210310_7dc7f653-e934-48f3-abbe-2311ec22a527.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        dataLap: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(ProductSaleLaptops)
