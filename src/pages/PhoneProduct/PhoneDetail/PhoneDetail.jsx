import React, { Fragment, useEffect, useState } from 'react'

// import './PhoneDetail.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct'
import ProductName from '../../ProductDetail/ProductName/ProductName'
import ShowDetail from '../../ProductDetail/ShowDetail/ShowDetail'
import { connect } from 'react-redux'
import Toolbar from '../../../container/Header/Toolbar/Toolbar'

const PhoneDetail = (props) => {
    const [loadProduct, setLoadProduct] = useState(null)

    const data = props.dataPhone.filter(product => product.idCategory === 'phone03')
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
                        price={loadProduct.price} />
                </div>
            </Fragment>
        )
    }

    let productItem = <p className="loader">loading</p>
    if (data) {
        productItem = (
            data.map(product => {
                return (
                    <Link to={`/phoneDetail/${product.id}`} key={product.id}>
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
        dataPhone: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(PhoneDetail)
