import rootReducer from '../reducers/index'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';

const middleware= [thunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(createLogger())
}

const store=createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
