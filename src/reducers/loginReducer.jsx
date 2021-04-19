import * as TypeActions from '../constant/TypeActions';

const initState = {
    users: []
}

const loginReducer = (state = initState, action) => {
    localStorage.setItem('users', JSON.stringify([...state.users]))
    switch (action.type) {
        case TypeActions.GG_LOGIN:
            const userLocalStr = JSON.parse(localStorage.getItem('users'))
            const userItemGg = {
                name: action.name,
                email: action.email,
                cartItem: action.cartItem,
                userId: userLocalStr.length
            }
            userLocalStr.push(userItemGg)

            localStorage.setItem('users', JSON.stringify(userLocalStr))

            return {
                ...state,
                users: userLocalStr
            };
        case TypeActions.REGISTER:
            const userLocal = JSON.parse(localStorage.getItem('users'))
            const userItem = {
                ...action.valueFormik,
                cartItem: action.cartItem,
                userId: userLocal.length
            }
            userLocal.push(userItem)
            localStorage.setItem('users', JSON.stringify(userLocal))
            return {
                ...state,
                users: userLocal
            }

        default:
            return state;
    }
}

export default loginReducer
