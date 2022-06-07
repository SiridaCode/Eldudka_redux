import * as React from 'react';
import cn from 'classnames';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';
import Container from '../../Container/Container';
import { NavLink } from 'react-router-dom';
import {
  setFilterData,
  setActiveCategory,
  setCurrentPage,
  setSearchData,
  setBreadcrumbs,
} from '../../../redux/data/dataActions';

const HeaderCategory = () => {
  const { activeCategory, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const cssActive = category => cn({ selected: category === activeCategory });
  const categories = [
    { name: 'Жидкости', link: '/liquid' },
    { name: 'Одноразки', link: '/disposable' },
    { name: 'Поды', link: '/pod' },
    { name: 'Картриджи', link: '/cartridge' },
    { name: 'Испарители', link: 'evaporator' },
  ];

  const onClickActiveCategory = category => {
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setCurrentPage(0));
    dispatch(setSearchData(fullData));
    dispatch(
      setBreadcrumbs([
        { name: 'Главная', href: '/' },
        { name: category, href: '/' },
      ])
    );
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

export default HeaderCategory;
