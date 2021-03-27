import React, { Fragment, useEffect, useState } from 'react'
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct'

import './ProductDetail.scss'
import ProductName from './ProductName/ProductName'
import ShowDetail from './ShowDetail/ShowDetail'
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductDetail = (props) => {
    const [loadProduct, setLoadProduct] = useState(null)
    const [data, setData] = useState(null)
    // console.log(props.match.params.id);
    useEffect(() => {
        console.log(props);
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops/' + props.match.params.id + '.json')
            .then(res => {
                const dataRender = res.data
                setLoadProduct(dataRender)
            })
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops.json')
            .then(res => {
                const cutArr = res.data.slice(0, 5);
                setData(cutArr)
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
                    <Link to={`/productDetail/${product.id}`} key={product.id}>
                        <CartProductBigSize
                            key={product.id}
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
        <div className="productDetail-page-wrap">
            {productDetail}
            <ContainerProduct title="Sản phẩm liên quan">
                {productItem}
            </ContainerProduct>
        </div>
    )
}

export default ProductDetail
