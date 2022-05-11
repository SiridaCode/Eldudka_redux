import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './data/dataReducer';

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
