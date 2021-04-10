import * as TypeActions from '../constant/TypeActions'

const initState = {
    cart: [],
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.ADD_CART:
            const cartItem = [...state.cart]
            const productCart = {
                ...action.product,
                idCart: 0
            }
            cartItem.push({ ...productCart, idCart: cartItem.length });
            localStorage.setItem('cartProduct', JSON.stringify(cartItem))
            // const getCartStore = JSON.parse(localStorage.getItem('cartProduct'))
            return {
                ...state,
                cart: cartItem
            }
        case TypeActions.DELETE_PRODUCT:
            const newCart = [...state.cart]
            const index = newCart.findIndex(product => product.idCart === action.id)
            newCart.splice(index, 1)
            // localStorage.setItem('cartProduct', JSON.stringify(newCart))
            // const cartStore = JSON.parse(localStorage.getItem('cartProduct'))
            return {
                ...state,
                cart: newCart
            }
        case TypeActions.INCREASE:
            const getCartIncrea = JSON.parse(localStorage.getItem('cartProduct'))
            const cartIncrea = [
                ...state.cart
            ]
            const indexIn = cartIncrea.findIndex(item => action.increase === item.idCart)
            cartIncrea[indexIn].amount = cartIncrea[indexIn].amount + 1;
            cartIncrea[indexIn].price += getCartIncrea[indexIn].price
            console.log(cartIncrea);
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
            cartDecrea[indexDe].amount = cartDecrea[indexDe].amount - 1;
            cartDecrea[indexDe].price -= getCartDecrea[indexDe].price;
            console.log(cartDecrea);
            return {
                ...state,
                cart: cartDecrea
            }
        default:
            return state;

    }
}

export default CartReducer;