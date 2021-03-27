import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Listlaptop.scss'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct'

const Listlaptop = () => {
    const [dataListLaptop, setDataListLaptop] = useState(null)
    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/laptops.json')
            .then(res => {
                setDataListLaptop(res.data)
            })
    }, [])

    let listLaptop = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataListLaptop) {
        listLaptop = (
            dataListLaptop.map(product => {
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
        )
    }

    return (
        <div className="listLaptop">
            <ContainerProduct title="Dành cho bạn" >
                {listLaptop}
            </ContainerProduct>
        </div>
    )
}

export default Listlaptop
