import * as React from 'react';
import cn from 'classnames';
import './styles.css';
import { useSelector } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';

const HeaderCategories = ({
  currentData,
  setCurrentData,
  setCurrentPage,
  setSearchText,
  activeCategory,
  setActiveCategory,
}) => {
  const { fullData } = useSelector(state => state);

  const categories = ['Жидкости', 'Одноразки', 'Поды', 'Картриджи', 'Испарители'];
  const cssActive = category => cn({ selected: category === activeCategory });
  const onClickActiveCategory = category => {
    setActiveCategory(category);
    filteredProductsByCategory(fullData, category);
    setCurrentData(filteredProductsByCategory);
    console.log(currentData);
    setCurrentPage(0);
    setSearchText('');
  };

  return (
    <header className="header-third">
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div
              onClick={() => onClickActiveCategory(category)}
              className="categories-item"
              data-category-name={category}
              key={index}
            >
              <p className="categories-item-name">{category}</p>
              <div className={cssActive(category)}></div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default HeaderCategories;
