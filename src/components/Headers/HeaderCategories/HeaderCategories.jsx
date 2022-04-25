import * as React from 'react';
import cn from 'classnames';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';
import { categories } from '../../../utils/utils';
import Container from '../../Container/Container';
import {
  setFilterData,
  setActiveCategory,
  setCurrentPage,
  setSearchData,
} from '../../../redux/fullData/dataActions';
import { NavLink } from 'react-router-dom';

const HeaderCategories = () => {
  const { activeCategory, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const cssActive = category => cn({ selected: category === activeCategory });

  const onClickActiveCategory = category => {
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setCurrentPage(0));
    dispatch(setSearchData(fullData));
  };

  return (
    <header className="header-third">
      <Container>
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <NavLink
                to="/"
                onClick={() => onClickActiveCategory(category.name)}
                className="categories-item"
                data-category-name={category.name}
                key={index}
              >
                <p className="categories-item-name">{category.name}</p>
                <div className={cssActive(category.name)}></div>
              </NavLink>
            );
          })}
        </div>
      </Container>
    </header>
  );
};

export default HeaderCategories;
