import React, { useEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import './BestSellProduct.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';

const BestSellProduct = () => {

    const [dataLaptops, setDataLaptops] = useState(null)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops.json')
            .then(res => {
                setDataLaptops(res.data)
            })
    }, [])

    let arr1 = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>
    let arr2 = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataLaptops) {
        arr1 = dataLaptops.slice(1, 6).map(product => {
            return <Link to={`/productDetail/${product.id}`}>
                <CartProductBigSize
                    key={product.id}
                    url={product.image}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    urlGift={product.gift} />
            </Link>
        })
        arr2 = dataLaptops.slice(6, 11).map(product => {
            return <Link to={`/productDetail/${product.id}`}>
                <CartProductBigSize
                    key={product.id}
                    url={product.image}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    urlGift={product.gift} />
            </Link>
        })
    }

    return (
        <div className="main__bestSellProduct">
            <div className="besSellProduct-wrap-name">
                <h4>Sản phẩm bán chạy</h4>
                <Link to="/listLaptop">
                    <p>Xem tất cả <i className="fas fa-chevron-right"></i></p>
                </Link>
            </div>
            <Carousel interval={10000}>
                <Carousel.Item>
                    <div className="besSellProduct-wrap-product">
                        {arr1}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="besSellProduct-wrap-product">
                        {arr2}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>


    )
}

export default BestSellProduct
