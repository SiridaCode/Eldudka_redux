import * as React from 'react';
import cn from 'classnames';
import classes from './HeaderCategory.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';
import Container from '../../Container/Container';
import { NavLink } from 'react-router-dom';
import { setFilterData, setActiveCategory, setSearchData } from '../../../redux/data/dataActions';

const categories = [
  { name: 'Жидкости', link: '/liquid' },
  { name: 'Одноразки', link: '/disposable' },
  { name: 'Поды', link: '/pod' },
  { name: 'Картриджи', link: '/cartridge' },
  { name: 'Испарители', link: 'evaporator' },
];

const HeaderCategory = () => {
  const { activeCategory, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const cssActive = category => cn({ selected: category === activeCategory });

  const onClickActiveCategory = category => {
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setSearchData(fullData));
  };

  return (
    <header className={classes.headerThird}>
      <Container>
        <div className={classes.categoriesWrapper}>
        <div className={classes.categories}>
          {categories.map((category, index) => {
            return (
              <NavLink
                to="/"
                onClick={() => onClickActiveCategory(category.name)}
                className={classes.categoriesItem}
                data-category-name={category.name}
                key={index}
              >
                <p className={classes.categoriesItemName}>{category.name}</p>
                <div className={classes[cssActive(category.name)]}></div>
              </NavLink>
            );
          })}
        </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderCategory;
