import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardProductBigSize from '../../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import './SaleProductItem.scss';


const SaleproductItem = React.memo(({ dataSaleProductLaptop }) => {

    const data = dataSaleProductLaptop
        .filter(laptop => laptop.idCategory === 'lap00')
        .slice(0, 4)

    return (
        <div className="sale_product-item">
            {
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
            }
        </div>
    )
})

const mapStateToProps = state => {
    return {
        dataSaleProductLaptop: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(SaleproductItem)
