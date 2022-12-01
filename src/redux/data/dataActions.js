import { SET_FILTER_DATA, SET_FULL_DATA, SET_ACTIVE_CATEGORY, SET_SEARCH_DATA } from './dataTypes';

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

export const fetchData = () => async dispatch => {
  const data = await fetch('https://api.eldudka.ru/Product/GetList').then(response =>
    response.json()
  );
  dispatch(setFullData(data));
  dispatch(setFilterData(data));
  dispatch(setSearchData(data));
};
