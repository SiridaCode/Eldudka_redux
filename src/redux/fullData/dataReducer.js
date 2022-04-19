import {
  SET_FILTER_DATA,
  SET_FULL_DATA,
  SET_ACTIVE_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SEARCH_DATA,
} from './dataTypes';

const INITIAL_STATE = {
  filterData: [],
  fullData: [],
  searchData: [],
  activeCategory: 'default',
  currentPage: 1,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return { ...state, filterData: action.payload };
    case SET_FULL_DATA:
      return { ...state, fullData: action.payload };
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_SEARCH_DATA:
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
