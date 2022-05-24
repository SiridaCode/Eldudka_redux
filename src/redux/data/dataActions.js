import { filterData } from '../../utils/filter';
import {
  SET_FILTER_DATA,
  SET_FULL_DATA,
  SET_ACTIVE_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SEARCH_DATA,
  SET_BREADCRUMBS,
} from './dataTypes';

export const setFullData = payload => {
  return {
    type: SET_FULL_DATA,
    payload,
  };
};

export const setFilterData = payload => {
  return {
    type: SET_FILTER_DATA,
    payload,
  };
};

export const setSearchData = payload => {
  return {
    type: SET_SEARCH_DATA,
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

export const setBreadcrumbs = payload => {
  return {
    type: SET_BREADCRUMBS,
    payload,
  };
};

export const fetchData = () => async dispatch => {
  const data = await fetch(process.env.REACT_APP_URL_CORE).then(response => response.json());
  dispatch(setFullData(data));
  dispatch(setFilterData(data));
  dispatch(setSearchData(data));
};
