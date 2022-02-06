import * as React from 'react';
import './styles.css'
import cn from 'classnames';
import Container from '../../Container';

const HeaderSearch = ({ fullData, setCurrentData, searchText, setSearchText, setActiveCategory, setCurrentPage }) => {

  const [openSearch, setOpenSearch] = React.useState(false);
  const [currentDataBySearch, setCurrentDataBySearch] = React.useState(fullData);

  const reset = () => {
    setSearchText('');
    setOpenSearch(false);
    setActiveCategory('default');
    setCurrentPage(0);
  }

  const onChangeSearch = ({ target }) => {

    const filteredProductsBySearch = fullData.filter((item) => {
      const targetLowerCase = target.value.toLowerCase();
      const itemLowerCase = item.name.toLowerCase();
      return itemLowerCase.includes(targetLowerCase);
    });

    setSearchText(target.value);
    setOpenSearch(target.value === '' ? false : true);
    setCurrentDataBySearch(filteredProductsBySearch);
    if (filteredProductsBySearch.length === 0) {
      setOpenSearch(false);
    }
  }

  const onClickElementSearch = (index) => {
    reset();
    setCurrentData(currentDataBySearch.filter((_, id) => index === id));
  }

  const onClickDeleteTarget = () => {
    reset();
    setCurrentData(fullData);
  }

  const onClickSelectAll = () => {
    reset();
    if (currentDataBySearch.length === 0) {
      return;
    }
    setCurrentData(currentDataBySearch);
  }

  return (
    <header className="header-second">
      <Container>
        <div className='header-second-wrapper'>
          <div className="logo">
            <img src='../logo.png' className="logo"></img>
          </div>

          <div className='input-wrapper'>
            <input onChange={onChangeSearch} value={searchText} type='text' className="js-data-example-ajax" name="state" placeholder="Поиск..." />
            <div className={cn({ 'search': openSearch === true })}>
              {openSearch === true && currentDataBySearch.map((value, id) => {
                const nameCard = value.name.split('(');
                const nameCardNoBracket = nameCard[0];
                return <div key={id} onClick={() => onClickElementSearch(id)} className='element-search'>{nameCardNoBracket}</div>
              })}
            </div>

            <img className='magnifer' src='../search.png' />
            {searchText !== '' && openSearch === true && <div onClick={onClickSelectAll} className='select-all'>
              <div className='select-all-text'>Выбрать все</div>
            </div>}
            {searchText !== '' && <img onClick={onClickDeleteTarget} className='vector' src='../Vector.png' />}
          </div>
        </div>
      </Container>
    </header>
  );
}
export default HeaderSearch;