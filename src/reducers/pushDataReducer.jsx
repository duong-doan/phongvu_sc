import * as TypeActions from '../constant/TypeActions'

const initState = {
    rootData: []
}

const pushDataReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.PUSH_DATA:
            return {
                ...state,
                rootData: action.payload.products
            }
    }

    return state
}

export default pushDataReducer