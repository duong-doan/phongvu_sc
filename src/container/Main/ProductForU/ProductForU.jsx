import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct';
import './ProductForU.scss';


const ProductForU = React.memo(({ dataProductForU }) => {

    const dataLap = dataProductForU.filter(laptop => laptop.idCategory === 'lap00')
    const dataPhone = dataProductForU.filter(laptop => laptop.idCategory === 'house02')
    const dataHouse = dataProductForU.filter(laptop => laptop.idCategory === 'phone03')

    return (
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
})

const mapStateToProps = state => {
    return {
        dataProductForU: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(ProductForU)
