import * as React from 'react';
import cn from 'classnames';
import classes from './CustomSearch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../../redux/data/dataActions';
import { useHistory } from 'react-router-dom';
import { filteredProductsBySearch } from '../../utils/filter';
import ButtonSearch from './ButtonSearch/ButtonSearch';

const SelectSearch = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const inputRef = React.useRef(null);
  const { fullData, searchData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const handleOutsideClick = event => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const onChangeSearch = ({ target }) => {
    dispatch(setSearchData(filteredProductsBySearch(fullData, target.value)));
    setSearchText(target.value);
  };

  React.useEffect(() => {
    const isOpen = searchText.length > 0;
    setOpenSearch(isOpen);
  }, [searchText]);

  console.log('text', searchText, 'open', openSearch);
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
      <div style={{ display: 'flex', background: '#990424', borderRadius: '6px' }}>
        <input
          ref={inputRef}
          onClick={onClickSearch}
          onChange={onChangeSearch}
          value={searchText}
          type="text"
          className={classes['js-data-example-ajax']}
          name="state"
          autoComplete="off"
          placeholder="Поиск"
        />
        <ButtonSearch
          searchText={searchText}
          setSearchText={setSearchText}
          setOpenSearch={setOpenSearch}
        />
      </div>
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
        {openSearch && searchData.length <= 0 && (
          <div className={classes['element-search']}>Ничего не найдено.</div>
        )}
      </div>
    </div>
  );
};

export default SelectSearch;
