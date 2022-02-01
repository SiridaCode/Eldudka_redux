import * as React from 'react';
import './styles.css'

const HeaderSearch = () => {
  return (
    <header className="header-second">
      <div className="logo">
        <img src='../logo.png' className="logo"></img>
      </div>
      <select className="js-data-example-ajax" name="state" placeholder="Поиск...">
        <option>Поиск...</option>
      </select>
    </header>
  )
}
export default HeaderSearch;
