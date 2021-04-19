import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProductBigSize from '../../../components/CardProduct/CardProductBigSize/CardProductBigSize';
import './BestSellProduct.scss';


const BestSellProduct = ({ dataBestSell }) => {

    return (
        <div className="main__bestSellProduct">
            <div className="besSellProduct-wrap-name">
                <h4>Sản phẩm bán chạy</h4>
                <Link to="/listLaptop">
                    <p>Xem tất cả <i className="fas fa-chevron-right"></i></p>
                </Link>
            </div>
            <Carousel interval={100000} indicators={false} >
                <Carousel.Item>
                    <div className="besSellProduct-wrap-product">
                        {dataBestSell.slice(1, 6).map(product => {
                            return <Link to={`/productDetail/${product.id}`} key={product.id}>
                                <CartProductBigSize
                                    url={product.image}
                                    name={product.name}
                                    price={product.price}
                                    discountPrice={product.discountPrice}
                                    urlGift={product.gift} />
                            </Link>
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="besSellProduct-wrap-product">
                        {dataBestSell.slice(6, 11).map(product => {
                            return <Link to={`/productDetail/${product.id}`} key={product.id}>
                                <CartProductBigSize
                                    url={product.image}
                                    name={product.name}
                                    price={product.price}
                                    discountPrice={product.discountPrice}
                                    urlGift={product.gift} />
                            </Link>
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataBestSell: state.DataReducer.rootData
    }
}

export default connect(mapStateToProps, null)(BestSellProduct)
