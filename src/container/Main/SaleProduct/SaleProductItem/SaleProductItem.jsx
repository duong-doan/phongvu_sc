import React, { useEffect, useState } from 'react';
import './SaleProductItem.scss'

import db from '../../../../db.json';
import CardProductBigSize from '../../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SaleproductItem = (props) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops.json')
            .then(res => {
                const cutArr = res.data.slice(0, 4)
                setData(cutArr)
            })
    }, [])

    let productItem = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (data) {
        productItem = (
            data.map(product => {
                return (
                    <Link to={`/productDetail/${product.id}`} key={product.id}>
                        <CardProductBigSize
                            url={product.image}
                            urlGift={product.gift}
                            name={product.name}
                            price={product.price}
                            discountPrice={product.discountPrice}
                        />
                    </Link>
                )
            })
        )
    }

    return (
        <div className="sale_product-item">
            {productItem}
        </div>
    )
}

export default SaleproductItem
