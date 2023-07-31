import * as React from 'react';
import cn from 'classnames';
import classes from './CustomSearch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../../redux/data/dataActions';
import { useHistory } from 'react-router-dom';
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

  const onClickElementSearch = id => {
    setSearchText('');
    setOpenSearch(false);
    history.push(`/${id}`);
  };

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={classes['input-wrapper']}>
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
          searchData.map(value => {
            return (
              <div
                id={value.uuid}
                key={value.uuid}
                onClick={() => onClickElementSearch(value.uuid)}
                className={classes['element-search']}
              >
                {value.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectSearch;
