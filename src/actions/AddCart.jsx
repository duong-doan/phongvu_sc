import * as TypeActions from '../constant/TypeActions'

export const AddCart = (cartItem) => {
    return {
        type: TypeActions.ADD_CART,
        payload: cartItem
    }
}