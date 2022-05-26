import * as React from 'react';
import './styles.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { filteredProductsBySearch } from '../../../utils/filter';
import {
  setFilterData,
  setCurrentPage,
  setSearchData,
  setBreadcrumbs,
} from '../../../redux/data/dataActions';
import { useHistory } from 'react-router-dom';

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
    dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]));
  };

  React.useEffect(() => {
    const isOpen = searchText ? true : false;
    setOpenSearch(isOpen);
  }, [searchText]);

  const onClickElementSearch = (eng, id) => {
    setSearchText('');
    setOpenSearch(false);
    history.push('search' + id);
    dispatch(
      setBreadcrumbs([
        { name: 'Главная', href: '/' },
        { name: 'Карточка товара', href: `/search${id}` },
      ])
    );

    dispatch(setCurrentPage(0));
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
    dispatch(setCurrentPage(0));
    setOpenSearch(false);
    history.push('/');
    dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]));
  };

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="input-wrapper">
      <input
        onClick={onClickSearch}
        onChange={onChangeSearch}
        value={searchText}
        type="text"
        className="js-data-example-ajax"
        name="state"
        autoComplete="off"
        placeholder="Поиск..."
      />
      <div className={cn({ search: openSearch === true })}>
        {openSearch &&
          searchData &&
          searchData.map((value, id) => {
            const [eng, rus] = value.name.split('(');
            return (
              <div
                id={id}
                key={id}
                onClick={() => onClickElementSearch(eng, id)}
                className="element-search"
              >
                {eng}
              </div>
            );
          })}
      </div>
      {openSearch && searchText && (
        <div onClick={onClickSelectAll} className="delete-target">
          Выбрать все
        </div>
      )}
      {openSearch && searchText && (
        <img onClick={onClickDeleteTarget} className="vector" src="../Vector.png" alt="no image" />
      )}
    </div>
  );
};

export default SelectSearch;
