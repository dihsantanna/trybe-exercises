import { combineReducers } from 'redux';
import logReducer from './logReducer';
import customersReducer from './customersReducer';

const rootReducers = combineReducers({ logReducer, customersReducer });

export default rootReducers;
