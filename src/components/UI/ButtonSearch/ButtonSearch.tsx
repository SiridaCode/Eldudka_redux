import React from 'react';
import classes from './ButtonSearch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData, setFullData } from '../../../redux/data/dataActions';
import { filterData, filteredProductsBySearch } from '../../../utils/filter';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ButtonSearch = ({ searchText, setSearchText, setOpenSearch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { fullData } = useSelector(({ data }: any) => data);

  const onClickButtonSearch = () => {
    console.log('click');
    dispatch(setFilterData(filteredProductsBySearch(fullData, searchText)));
    setOpenSearch(false);
    history.push(``);
  };

  return (
    <button onClick={onClickButtonSearch} className={classes['button-search']}>
      <img className={classes['icon-search']} src="./search-30.png" alt="search" />
    </button>
  );
};
export default ButtonSearch;
