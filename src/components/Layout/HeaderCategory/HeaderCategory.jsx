import * as React from 'react';
import classes from './HeaderCategory.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProductsByCategory } from '../../../utils/filter';
import Container from '../../Container/Container';
import { NavLink, useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const onClickActiveCategory = category => {
    history.push('/categories');
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setSearchData(fullData));
  };

  return (
    <header className={classes.headerThird}>
      <Container>
        <div className={classes.categoriesWrapper}>
          {categories.map((category, index) => {
            return (
              <NavLink
                to="/"
                onClick={() => onClickActiveCategory(category.name)}
                className={`${classes.categoriesItem} ${
                  activeCategory === category.name ? classes.active : ''
                }`}
                data-category-name={category.name}
                key={index}
              >
                <p className={classes.categoriesItemName}>{category.name}</p>
              </NavLink>
            );
          })}
        </div>
      </Container>
    </header>
  );
};

export default HeaderCategory;
