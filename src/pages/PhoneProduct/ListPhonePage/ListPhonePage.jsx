import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct'
import './ListPhonePage.scss'


const ListPhonePage = (props) => {

    const dataPhone = props.dataPhone

    let phoneProduct = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataPhone) {
        phoneProduct = (
            dataPhone.map(product => {
                return <Link to={`/phoneDetail/${product.id}`} key={product.id}>
                    <CartProductBigSize
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

const mapStateToProps = state => {
    return {
        dataPhone: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(ListPhonePage)
