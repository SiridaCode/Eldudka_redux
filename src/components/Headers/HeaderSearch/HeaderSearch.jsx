import * as React from 'react';
import './styles.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { filteredProductsBySearch } from '../../../utils/filter';
import { setFilterData, setCurrentPage, setSearchData } from '../../../redux/fullData/dataActions';
import Container from '../../Container/Container';
import { useHistory } from 'react-router-dom';

const HeaderSearch = () => {
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
    searchText ? setOpenSearch(true) : setOpenSearch(false);
  }, [searchText]);

  const onClickElementSearch = (eng, id) => {
    setSearchText('');
    setOpenSearch(false);
    history.push('search' + id);
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
