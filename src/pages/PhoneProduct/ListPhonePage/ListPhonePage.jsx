import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './ListPhonePage.scss'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct'
import { Link } from 'react-router-dom'

const ListPhonePage = () => {

    const [dataPhone, setDataPhone] = useState(null)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/phone.json')
            .then(res => {
                setDataPhone(res.data)
            })
    }, [])

    let phoneProduct = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataPhone) {
        phoneProduct = (
            dataPhone.map(product => {
                return <Link to={`/phoneDetail/${product.id}`}>
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
        <div className="listPhonePage">
            <ContainerProduct title="Dành cho bạn">
                {phoneProduct}
            </ContainerProduct>
        </div>
    )
}

export default ListPhonePage
