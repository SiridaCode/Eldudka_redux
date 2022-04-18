import { SET_FILTER_DATA, SET_FULL_DATA } from './dataTypes';

const INITIAL_STATE = {
  filterData: [],
  fullData: [],
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return { ...state, filterData: action.payload };
    case SET_FULL_DATA:
      return { ...state, fullData: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
