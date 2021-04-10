import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Accessories.scss';
import BannerFullWidth from '../../components/BannerFullWidth/BannerFullWidth';
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct';
import Toolbar from '../../container/Header/Toolbar/Toolbar';


const Accessories = ({ dataAccessories }) => {
    const dataAcc = dataAccessories.filter(product => product.idCategory === 'acc01')

    let productItem = <div style={{ height: '200px', width: '90%', margin: 'auto' }}>
        <p className="loader"></p>
    </div>

    if (dataAcc) {
        productItem = (
            dataAcc.map(product => {
                return (
                    <Link to={`/accDetail/${product.id}`} key={product.id}>
                        <CartProductBigSize
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
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="accessories">
                <BannerFullWidth url={'https://lh3.googleusercontent.com/PTmjbvvVBgZDWbhsG2eQZERHJb4ghvWOQeDUG9q0KS0AKb4sQTsVWerwFSrx-EHermUJQafUBdtfZBQMpl4bVnRZTQQdTB7F=w1232-rw'} />
                <ContainerProduct title="Dành cho bạn">
                    {productItem}
                </ContainerProduct>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        dataAccessories: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(Accessories)
