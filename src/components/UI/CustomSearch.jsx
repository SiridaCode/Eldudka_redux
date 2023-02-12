import * as React from 'react';
import cn from 'classnames';
import classes from './CustomSearch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData, setSearchData } from '../../redux/data/dataActions';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../image/search-icon.png';
import { filteredProductsBySearch } from '../../utils/filter';

const SelectSearch = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const { fullData, searchData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeSearch = ({ target }) => {
    dispatch(setSearchData(filteredProductsBySearch(fullData, target.value)));
    setSearchText(target.value);
    history.push('/');
  };

  React.useEffect(() => {
    const isOpen = searchText ? true : false;
    setOpenSearch(isOpen);
  }, [searchText]);

  const onClickElementSearch = (eng, id) => {
    setSearchText('');
    setOpenSearch(false);
    history.push('search' + id);
  };

  const onClickDeleteTarget = () => {
    setSearchText('');
    setOpenSearch(false);
    dispatch(setFilterData(fullData));
    dispatch(setSearchData(fullData));
  };

  const onClickSelectAll = () => {
    dispatch(setFilterData(searchData));
    setSearchText('');
    setOpenSearch(false);
    history.push('/');
  };

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={classes['input-wrapper']}>
      <img className={classes['search-icon']} src='./find_icon.png' alt="Иконка поиска" />
      <input
        onClick={onClickSearch}
        onChange={onChangeSearch}
        value={searchText}
        type="text"
        className={classes['js-data-example-ajax']}
        name="state"
        autoComplete="off"
        placeholder="Поиск"
      />
      <div className={classes[cn({ search: openSearch === true })]}>
        {openSearch &&
          searchData &&
          searchData.map((value, id) => {
            const [eng] = value.name.split('(');
            return (
              <div
                id={id}
                key={id}
                onClick={() => onClickElementSearch(eng, id)}
                className={classes['element-search']}
              >
                {eng}
              </div>
            );
          })}
      </div>
      {openSearch && (
        <div onClick={onClickSelectAll} className={classes['delete-target']}>
          Выбрать все
        </div>
      )}
      {openSearch && searchText && (
        <img
          onClick={onClickDeleteTarget}
          className={classes['vector']}
          src="../Vector.png"
          alt="Стереть поиск"
        />
      )}
    </div>
  );
};

export default SelectSearch;
