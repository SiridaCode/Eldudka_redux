import * as React from 'react';
import './styles.css'
import cn from 'classnames';

const HeaderSearch = ({ fullData, currentData, setCurrentData, searchText, setSearchText, setActiveCategory }) => {

  const [openSearch, setOpenSearch] = React.useState(false);
  const [currentDataBySearch, setCurrentDataBySearch] = React.useState(fullData);

  const onChangeSearch = ({ target }) => {
    const targetLowerCase = target.value.toLowerCase();
    const filteredProductsBySearch = fullData.filter((item, index) => item.name.toLowerCase().includes(targetLowerCase));
    setSearchText(target.value, (setOpenSearch(target.value === '' ? false : true)));
    setCurrentDataBySearch(filteredProductsBySearch,
      (filteredProductsBySearch.length === 0 ? setOpenSearch(false) : ''));

  }

  const onClickElementSearch = (value, index) => {
    setSearchText('');
    setOpenSearch(false);
    setActiveCategory('default')
    setCurrentData(currentDataBySearch.filter((item, id) => index === id));
  }

  const onClickDeleteTarget = () => {
    setSearchText('');
    setOpenSearch(false);
    setActiveCategory('default')
    setCurrentData(fullData);
  }

  const onClickSelectAll = () => {
    setSearchText('');
    setOpenSearch(false);
    setActiveCategory('default')

    if (currentDataBySearch.length === 0) {
      return;
    }
    setCurrentData(currentDataBySearch);
  }

  return (
    <header className="header-second">
      <div className="logo">
        <img src='../logo.png' className="logo"></img>
      </div>
      <div className='input-wrapper'>
        <input onChange={onChangeSearch} value={searchText} type='text' className="js-data-example-ajax" name="state" placeholder="Поиск..." />
        <div className={cn({ 'search': openSearch === true })}>
          {openSearch === true && fullData && currentDataBySearch.map((value, id) => {
            const nameCard = value.name.split('(');
            const nameCardNoBracket = nameCard[0];
            return <div key={id} onClick={() => onClickElementSearch(nameCardNoBracket, id)} className='element-search'>{nameCardNoBracket}</div>
          })}
        </div>
        <img className='magnifer' src='../search.png' />
        {searchText !== '' && openSearch === true && <div onClick={onClickSelectAll} className='select-all'>
          <div className='select-all-text'>Выбрать все</div>
        </div>}
        {searchText !== '' && <img onClick={onClickDeleteTarget} className='vector' src='../Vector.png' />}
      </div>
    </header>
  );
}
export default HeaderSearch;