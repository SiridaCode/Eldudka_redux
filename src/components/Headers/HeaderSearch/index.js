import * as React from 'react';
import './styles.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const HeaderSearch = ({ searchText, setSearchText }) => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const { fullData } = useSelector(state => state);

  const onChangeSearch = ({ target }) => {
    setSearchText(target.value);
  };

  const onClickElementSearch = (value, index) => {
    setSearchText(value);
  };

  const onClickDeleteTarget = () => {
    setSearchText('');
  };

  const onClickSelectAll = () => {};

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <header className="header-second">
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
          {openSearch === true &&
            fullData &&
            fullData.map((value, id) => {
              const nameCard = value.name.split('(');
              const nameCardNoBracket = nameCard[0];
              return (
                <div
                  key={id}
                  onClick={() => onClickElementSearch(nameCardNoBracket, id)}
                  className="element-search"
                >
                  {nameCardNoBracket}
                </div>
              );
            })}
        </div>
        {searchText !== '' && openSearch === true && (
          <div onClick={onClickSelectAll} className="delete-target">
            Выбрать все
          </div>
        )}
        {searchText !== '' && openSearch === true && (
          <img onClick={onClickDeleteTarget} className="vector" src="../Vector.png" />
        )}
      </div>
    </header>
  );
};
export default HeaderSearch;
