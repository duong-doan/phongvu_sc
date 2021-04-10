import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import ContainerProduct from '../../../components/ContainerProduct/ContainerProduct'
import Toolbar from '../../../container/Header/Toolbar/Toolbar'
import './Listlaptop.scss'


const Listlaptop = (props) => {
    const dataListLaptop = props.dataLap.filter(product => product.idCategory === 'lap00')

    let listLaptop = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataListLaptop) {
        listLaptop = (
            dataListLaptop.map(product => {
                return <Link to={`/productDetail/${product.id}`} key={product.id}>
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
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="listLaptop">
                <ContainerProduct title="Dành cho bạn" >
                    {listLaptop}
                </ContainerProduct>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        dataLap: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(Listlaptop)
