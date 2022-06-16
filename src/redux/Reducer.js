import {combineReducers} from 'redux';
import {bankReducer} from './reducers/bank.reducer'
import {registReducer} from './reducers/regist.reducer'

export default combineReducers({bankReducer,registReducer});

