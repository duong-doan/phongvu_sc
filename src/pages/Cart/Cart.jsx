import React, { Fragment, useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import * as TypeActions from '../../constant/TypeActions';

import './Cart.scss'
import ProductName from '../ProductDetail/ProductName/ProductName'
import CartItem from './CartItem/CartItem'
import Toolbar from '../../container/Header/Toolbar/Toolbar'
import CartPayment from './CartPayment/CartPayment';

const Cart = ({ onDeleteProduct, cart, onIncrease, onDecrease }) => {
  const [amountProduct, setAmountProduct] = useState(0)

  useEffect(() => {
    setAmountProduct(cart.length)
  })

  let cartStoreRender;
  if (cart.length !== 0) {
    cartStoreRender = (
      cart.map(cartItem => {
        return (
          <CartItem
            key={cartItem.idCart}
            idCartItem={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            image={cartItem.image}
            amount={cartItem.amount}
            increase={() => onIncrease(cartItem.idCart)}
            decrease={() => onDecrease(cartItem.idCart)}
            deleteProduct={() => onDeleteProduct(cartItem.idCart)} />
        )
      })
    )
  } else {
    cartStoreRender = ''
  }

  return (
    <Fragment>

      <Toolbar isShowToolbar />
      <div className="cartPage__wrap">
        <div className="cartPage">
          <ProductName nameProduct="Gio hang" />
          <h1 className="cartPage__title">{`Giỏ hàng của bạn (${amountProduct} sản phẩm)`}</h1>
          {
            cartStoreRender === '' ? <div className="cartPage__wrap__img">
              <img className="img__empty" src="https://i.imgur.com/Drj57qu.png" alt="" />
            </div> : null
          }
          <div className="cartPage__wrap__main">
            <div className="wrap__main__allProduct">
              <div className="cartPage__wrap__productItem">
                {cartStoreRender}
              </div>
            </div>
            <CartPayment />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    data: state.DataReducer.rootData,
    cart: state.CartReducer.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteProduct: (id, cart) => dispatch({ type: TypeActions.DELETE_PRODUCT, id, cart, }),
    onIncrease: (increase) => dispatch({ type: TypeActions.INCREASE, increase }),
    onDecrease: (decrease) => dispatch({ type: TypeActions.DECREASE, decrease })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
