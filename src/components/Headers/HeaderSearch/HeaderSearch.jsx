import * as React from 'react';
import './styles.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCard, filteredProductsBySearch, filterData } from '../../../utils/filter';
import { setFilterData, setCurrentPage, setSearchData } from '../../../redux/fullData/dataActions';
import Container from '../../Container/Container';
import { Link, useHistory } from 'react-router-dom';

const HeaderSearch = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const { fullData, searchData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeSearch = ({ target }) => {
    const filter = filteredProductsBySearch(fullData, target.value);
    setSearchText(target.value);
    dispatch(setSearchData(filter));
  };

  React.useEffect(() => {
    searchText ? setOpenSearch(true) : setOpenSearch(false);
  }, [searchText]);

  const onClickElementSearch = id => {
    setSearchText('');
    setOpenSearch(false);
    dispatch(setSearchData(fullData));
    dispatch(setCurrentPage(0));
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
    <header className="header-second">
      <Container>
        <div className="header-second-wrapper">
          <div className="logo">
            <img src="../logo.png" className="logo"></img>
          </div>
          <div className="input-wrapper">
            <input
              onClick={onClickSearch}
              onChange={onChangeSearch}
              value={searchText}
              type="text"
              className="js-data-example-ajax"
              name="state"
              placeholder="Поиск..."
            />
            <div className={cn({ search: openSearch === true })}>
              {openSearch &&
                searchData &&
                searchData.map((value, id) => {
                  const [eng, rus] = value.name.split('(');
                  return (
                    <div
                      key={id}
                      onClick={() => onClickElementSearch(id)}
                      className="element-search"
                    >
                      {eng}
                    </div>
                  );
                })}
            </div>
            {openSearch === true && (
              <div onClick={onClickSelectAll} className="delete-target">
                Выбрать все
              </div>
            )}
            {openSearch === true && (
              <img onClick={onClickDeleteTarget} className="vector" src="../Vector.png" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
