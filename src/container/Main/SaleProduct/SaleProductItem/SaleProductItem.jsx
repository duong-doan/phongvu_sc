import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SaleProductItem.scss'

import CardProductBigSize from '../../../../components/CardProduct/CardProductBigSize/CardProductBigSize';

const SaleproductItem = React.memo(({ dataSaleProductLaptop }) => {

    const data = dataSaleProductLaptop
        .filter(laptop => laptop.idCategory === 'lap00')
        .slice(0, 4)

    let productItem =
        <div style={{ height: '200px' }}>
            <p className="loader" style={{
                right: '500px',
                bottom: '130px',
            }}></p>
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
})

const mapStateToProps = state => {
    return {
        dataSaleProductLaptop: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(SaleproductItem)
