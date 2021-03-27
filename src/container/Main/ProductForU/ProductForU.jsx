import React, { useEffect, useState } from 'react'

import './ProductForU.scss'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import db from '../../../db.json';
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductForU = () => {

    const [dataLap, setDataLap] = useState(null)
    const [dataPhone, setDataPhone] = useState(null)
    const [dataHouse, setDataHouse] = useState(null)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops.json')
            .then(res => {
                setDataLap(res.data)
            })
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/phone.json')
            .then(res => {
                setDataPhone(res.data)
            })
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/housewear.json')
            .then(res => {
                setDataHouse(res.data)
            })
    })

    let containerProduct = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataPhone && dataLap && dataHouse) {
        containerProduct = (
            <ContainerProduct title="Dành cho bạn">
                {
                    dataLap.map(product => {
                        return <Link to={`/productDetail/${product.id}`}>
                            <CartProductBigSize
                                key={product.id}
                                url={product.image}
                                name={product.name}
                                price={product.price}
                                discountPrice={product.discountPrice}
                                urlGift={product.gift} />
                        </Link>
                    }).concat(dataPhone.map(phone => {
                        return <Link to={`/phoneDetail/${phone.id}`}>
                            <CartProductBigSize
                                key={phone.id}
                                url={phone.image}
                                name={phone.name}
                                price={phone.price}
                                discountPrice={phone.discountPrice}
                                urlGift={phone.gift} />
                        </Link>
                    })).concat(dataHouse.map(housewear => {
                        return <Link to={`/housewearDetail/${housewear.id}`}>
                            <CartProductBigSize
                                key={housewear.id}
                                url={housewear.image}
                                name={housewear.name}
                                price={housewear.price}
                                discountPrice={housewear.discountPrice}
                                urlGift={housewear.gift} />
                        </Link>
                    }))
                }
            </ContainerProduct>

        )
    }

    return containerProduct
}

export default ProductForU
