import * as React from 'react';
import cn from 'classnames';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';
import {
  setFilterData,
  setActiveCategory,
  setCurrentPage,
  setSearchData,
} from '../../../redux/fullData/dataActions';

const HeaderCategories = () => {
  const { activeCategory, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const categories = ['Жидкости', 'Одноразки', 'Поды', 'Картриджи', 'Испарители'];

  const cssActive = category => cn({ selected: category === activeCategory });

  const onClickActiveCategory = category => {
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setCurrentPage(1));
    dispatch(setSearchData(''));
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
