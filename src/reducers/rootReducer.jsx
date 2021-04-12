import { combineReducers } from 'redux';

import DataReducer from './pushDataReducer';
import CartReducer from './cartReducer';
import SearchReducer from './searchReducer';
import LoginReducer from './loginReducer'

const rootReducers = combineReducers({
    DataReducer,
    CartReducer,
    SearchReducer,
    LoginReducer
});

export default rootReducers;