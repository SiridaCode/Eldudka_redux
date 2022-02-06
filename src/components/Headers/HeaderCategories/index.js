import * as React from 'react';
import cn from "classnames";
import './styles.css'
import Container from '../../Container';


const HeaderCategories = ({ fullData, currentData, setCurrentData, setCurrentPage, setSearchText, activeCategory, setActiveCategory }) => {

  const categories = ['Жидкости', 'Одноразки', 'Поды', 'Картриджи', 'Испарители'];
  const cssActive = (category) => cn({ 'selected': category === activeCategory });
  const onClickActiveCategory = (category) => {
    setActiveCategory(category);
    const filteredProductsByCategory = fullData.filter((value) => value.name.toLowerCase().includes(category.toLowerCase().slice(0, 3)));
    setCurrentData(filteredProductsByCategory);
    setSearchText('');
    setCurrentPage(0)
  }

  return (
    <header className='header-third'>
      <Container>
        <div className='categories'>
          {categories.map((category, index) => {
            return (
              <div onClick={() => onClickActiveCategory(category)} className='categories-item' data-category-name={category} key={index}>
                <p className="categories-item-name">{category}</p>
                <div className={cssActive(category)}></div>
              </div>)
          })}
        </div>
      </Container>
    </header >
  )
}

export default HeaderCategories;
