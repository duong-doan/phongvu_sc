import * as TypeActions from '../constant/TypeActions'

const initState = {
    cart: [],
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.ADD_CART:
            const cartItem = [...state.cart]

            cartItem.push({ ...action.product, idCart: cartItem.length });
            localStorage.setItem('cartProduct', JSON.stringify(cartItem))
            return {
                ...state,
                cart: cartItem
            }
        case TypeActions.DELETE_PRODUCT:
            const newCart = [...state.cart]
            const index = newCart.findIndex(product => product.idCart === action.id)
            newCart.splice(index, 1)
            return {
                ...state,
                cart: newCart
            }
        case TypeActions.INCREASE:
            const getCartIncrea = JSON.parse(localStorage.getItem('cartProduct'))
            const cartIncrea = [...state.cart]
            const indexIn = cartIncrea.findIndex(item => action.increase === item.idCart);

            const indexInCartLocal = getCartIncrea.findIndex(item => action.increase === item.idCart)
            cartIncrea[indexIn].amount = cartIncrea[indexIn].amount + 1;
            cartIncrea[indexIn].price += getCartIncrea[indexInCartLocal].price
            return {
                ...state,
                cart: cartIncrea
            }
        case TypeActions.DECREASE:
            const getCartDecrea = JSON.parse(localStorage.getItem('cartProduct'))
            const cartDecrea = [
                ...state.cart
            ]
            const indexDe = cartDecrea.findIndex(item => action.decrease === item.idCart)
            const indexDeCartLocal = getCartDecrea.findIndex(item => action.decrease === item.idCart)
            cartDecrea[indexDe].amount = cartDecrea[indexDe].amount - 1;
            cartDecrea[indexDe].price -= getCartDecrea[indexDeCartLocal].price;

            return {
                ...state,
                cart: cartDecrea
            }
        default:
            return state;

    }
}

export default CartReducer;