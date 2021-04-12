import * as TypeActions from '../constant/TypeActions';

const initState = {
    users: []
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.GG_LOGIN:
            const listUsers = [...state.users]

            listUsers.push({
                userId: listUsers.length,
                name: action.name,
                email: action.email
            })

            return {
                ...state,
                users: listUsers
            };

        default:
            return state;
    }
}

export default loginReducer
