import { combineReducers } from 'redux';

import DataReducer from './pushDataReducer';
import CartReducer from './cartReducer';
import SearchReducer from './searchReducer';

const rootReducers = combineReducers({
    DataReducer,
    CartReducer,
    SearchReducer
});

export default rootReducers;