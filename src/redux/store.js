import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './fullData/dataReducer';

// const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
// const devtoolMiddleware = ext && ext();

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(
  reducers,
  // compose(applyMiddleware(thunk), devtoolMiddleware)
  compose(applyMiddleware(thunk))
);

export default store;
