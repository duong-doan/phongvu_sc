import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './ProductDetail.scss'
import Toolbar from '../../container/Header/Toolbar/Toolbar'
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct'
import ProductName from './ProductName/ProductName'
import ShowDetail from './ShowDetail/ShowDetail'
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize'

const ProductDetail = (props) => {
    const [loadProduct, setLoadProduct] = useState(null)
    const data = props.dataLap.filter(product => product.idCategory === 'lap00')
        .slice(0, 5)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/products/' + props.match.params.id + '.json')
            .then(res => {
                setLoadProduct(res.data)
            })
    }, [loadProduct])

    let productDetail =
        <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
            <p className="loader"></p>
        </div>

    function format(n) {
        return n.toLocaleString().replace('.', '.').replace(/\d{3}(?=(\d{3})*,)/g)
    }

    if (loadProduct) {
        productDetail = (
            <Fragment>
                <ProductName nameProduct={loadProduct.name} />
                <div className="productDetail-page">
                    <ShowDetail
                        idProduct={loadProduct.id}
                        name={loadProduct.name}
                        image={loadProduct.image}
                        imageFull={loadProduct.imageFull}
                        price={loadProduct.price}
                        brand={loadProduct.brand} />
                </div>
            </Fragment>
        )
    }

    let productItem = <p className="loader">loading</p>
    if (data) {
        productItem = (
            data.map(product => {
                return (
                    <Link to={`/productDetail/${product.id}`} key={product.id}>
                        <CartProductBigSize
                            url={product.image}
                            name={product.name}
                            price={product.price}
                            discountPrice={product.discountPrice}
                            urlGift={product.gift} />
                    </Link>
                )
            })
        )
    }

    return (
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="productDetail-page-wrap">
                {productDetail}
                <ContainerProduct title="Sản phẩm liên quan">
                    {productItem}
                </ContainerProduct>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        dataLap: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(ProductDetail)
