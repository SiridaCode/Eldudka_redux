import { IInitialState, ActionProps } from './types';
import {
  SET_FILTER_DATA,
  SET_FULL_DATA,
  SET_ACTIVE_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SEARCH_DATA,
  SET_BREADCRUMBS,
} from './dataTypes.ts';

export const INITIAL_STATE: IInitialState = {
  filterData: [],
  fullData: [],
  searchData: [],
  activeCategory: 'default',
  currentPage: 0,
  breadcrumbs: [{ name: 'Главная', href: '/' }],
};

const dataReducer = (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return { ...state, filterData: action.payload };
    case SET_FULL_DATA:
      return { ...state, fullData: action.payload };
    case SET_SEARCH_DATA:
      return { ...state, searchData: action.payload };
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_BREADCRUMBS:
      return { ...state, breadcrumbs: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
