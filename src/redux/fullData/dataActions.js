import {
  SET_FILTER_DATA,
  SET_FULL_DATA,
  SET_ACTIVE_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SEARCH_TEXT,
} from './dataTypes';
import { filterData } from '../../utils/filter';

export const setFilterData = payload => {
  return {
    type: SET_FILTER_DATA,
    payload,
  };
};

export const setFullData = payload => {
  return {
    type: SET_FULL_DATA,
    payload,
  };
};

export const setActiveCategory = payload => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload,
  };
};

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setSearchText = payload => {
  return {
    type: SET_SEARCH_TEXT,
    payload,
  };
};

export const fetchData = () => async dispatch => {
  const data = await fetch(process.env.REACT_APP_URL_CORE).then(response => response.json());
  dispatch(setFullData(filterData(data)));
  dispatch(setFilterData(filterData(data)));
};
