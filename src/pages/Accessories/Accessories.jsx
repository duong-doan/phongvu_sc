import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Accessories.scss'

import ContainerProduct from '../../components/ContainerProduct/ContainerProduct'
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import BannerFullWidth from '../../components/BannerFullWidth/BannerFullWidth';

const Accessories = () => {
    const [dataAcc, setDataAcc] = useState(null)

    useEffect(() => {
        axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/accessories.json')
            .then(res => {
                setDataAcc(res.data)
            })
    }, [])
    let productItem = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataAcc) {
        productItem = (
            dataAcc.map(product => {
                return (
                    <Link to={`/accDetail/${product.id}`}>
                        <CartProductBigSize
                            key={product.id}
                            url={product.image}
                            name={product.name}
                            price={product.price}
                            discountPrice={product.discountPrice}
                            urlGift={product.gift} />
                    </Link>)
            })
        )
    }

    return (
        <div className="accessories">
            <BannerFullWidth url={'https://lh3.googleusercontent.com/PTmjbvvVBgZDWbhsG2eQZERHJb4ghvWOQeDUG9q0KS0AKb4sQTsVWerwFSrx-EHermUJQafUBdtfZBQMpl4bVnRZTQQdTB7F=w1232-rw'} />
            <ContainerProduct title="Dành cho bạn">
                {productItem}
            </ContainerProduct>
        </div>
    )
}

export default Accessories
