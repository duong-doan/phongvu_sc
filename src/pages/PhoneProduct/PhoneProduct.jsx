import React, { Fragment, useEffect, useState } from 'react';
import ContainerProduct from '../../components/ContainerProduct/ContainerProduct';
import './PhoneProduct.scss';
import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Toolbar from '../../container/Header/Toolbar/Toolbar';

const PhoneProduct = (props) => {

    const dataPhone = props.dataPhone.filter(product => product.idCategory === 'phone03')

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
        <Fragment>
            <Toolbar isShowToolbar />
            <div className="phoneProduct">
                <img className="phoneProduct__banner" src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_94130dab-0098-45f3-bf4e-3c8bf5f9b761.jpg" alt="" />
                <ContainerProduct title="Sản phẩm liên quan" urlPage={`/listPhone`}>
                    {phoneProduct}
                </ContainerProduct>
                <div className="phoneProduct__policy">
                    <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_798de840-b4b5-4269-aad2-e97df1a28034.jpg" alt="" />
                    <img src=" https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_9892a54f-9b1f-4850-b9bd-949956ff0988.jpg" alt="" />
                    <img src=" https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_c20d6f53-5fa5-4922-b5af-93dfd92eff0e.jpg" alt="" />
                    <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_059dfb77-fc78-401a-b2dd-77af5bfe2aed.jpg" alt="" />
                </div>
                <img className="phoneProduct__title" src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_25029d79-a09d-4274-8765-a16408b377de.jpg" alt="" />
                <div className="phoneProduct__wrap--new">
                    <div className="wrap--new--full">
                        <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_f49b96f5-80e2-4aac-b2e2-de8e0fa71fd9.jpg" alt="" />
                    </div>
                    <div className="wrap--new--half">
                        <div className="wrap--img">
                            <Link to="/listPhone">
                                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_9ce3c400-24fe-4c51-9361-61be2af0d3b4.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="wrap--img">
                            <Link to="/listPhone">
                                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_da978d2a-329b-44ef-9013-b9af2ee10cd3.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="wrap--img">
                            <Link to="/listPhone">
                                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_254c9c02-128c-4633-b88f-847928eeb5ba.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="wrap--img">
                            <Link to="/listPhone">
                                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/17/20210217_8688aa17-0518-4f43-b62e-fe4587e94e4a.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

const mapStateToProps = state => {
    return {
        dataPhone: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(PhoneProduct)
