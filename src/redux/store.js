import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './data/dataReducer';
import { shoppingCartReducer } from './shoppingCart';
import { favoritesReducer } from './favorites';

const reducers = combineReducers({
  data: dataReducer,
  shoppingCart: shoppingCartReducer,
  favorites: favoritesReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
