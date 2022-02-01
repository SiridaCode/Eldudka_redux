import * as React from 'react';
import './styles.css'
import cn from 'classnames';

const HeaderSearch = ({ fullData, searchText, setSearchText }) => {

  const onChangeSearch = ({ target }) => {
    console.log(searchText)
    setSearchText(target.value);
  }

  return (
    <header className="header-second">
      <div className="logo">
        <img src='../logo.png' className="logo"></img>
      </div>
      <input onChange={onChangeSearch} value={searchText} type='text' className="js-data-example-ajax" name="state" placeholder="Поиск..." />
    </header>
  );
}
export default HeaderSearch;