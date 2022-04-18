import { SET_FILTER_DATA, SET_FULL_DATA } from './dataTypes';
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

export const fetchData = () => async dispatch => {
  const data = await fetch(process.env.REACT_APP_URL_CORE).then(response => response.json());
  dispatch(setFullData(data));
  dispatch(setFilterData(filterData(data)));
};
