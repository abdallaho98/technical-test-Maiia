import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducer';

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
