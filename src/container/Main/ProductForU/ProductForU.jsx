import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import './ProductForU.scss'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct';

const ProductForU = React.memo(({ dataProductForU }) => {

    const dataLap = dataProductForU.filter(laptop => laptop.idCategory === 'lap00')
    const dataPhone = dataProductForU.filter(laptop => laptop.idCategory === 'house02')
    const dataHouse = dataProductForU.filter(laptop => laptop.idCategory === 'phone03')

    let containerProduct = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataPhone && dataLap && dataHouse) {
        containerProduct = (
            <ContainerProduct title="Dành cho bạn">
                {
                    dataLap.map(product => {
                        return <Link to={`/productDetail/${product.id}`} key={product.id}>
                            <CartProductBigSize
                                url={product.image}
                                name={product.name}
                                price={product.price}
                                discountPrice={product.discountPrice}
                                urlGift={product.gift} />
                        </Link>
                    }).concat(dataPhone.map(phone => {
                        return <Link to={`/phoneDetail/${phone.id}`} key={phone.id}>
                            <CartProductBigSize
                                url={phone.image}
                                name={phone.name}
                                price={phone.price}
                                discountPrice={phone.discountPrice}
                                urlGift={phone.gift} />
                        </Link>
                    })).concat(dataHouse.map(housewear => {
                        return <Link to={`/housewearDetail/${housewear.id}`} key={housewear.id}>
                            <CartProductBigSize
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
})

const mapStateToProps = state => {
    return {
        dataProductForU: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(ProductForU)
