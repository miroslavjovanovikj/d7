import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';
const middware = applyMiddleware(thunk, createLogger());
const store =createStore(reducer, middware);
export default store;
