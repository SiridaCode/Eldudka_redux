import * as React from 'react';
import { motion } from 'framer-motion';
import classes from './BurgerMobileMenu.module.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { setActiveCategory, setFilterData, setSearchData } from '../../redux/data/dataActions';
import { filteredProductsByCategory } from '../../utils/filter';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i }) => {
  const { activeCategory, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const cssActive = category => classNames({ selected: category === activeCategory });
  const history = useHistory();

  const onClickActiveCategory = category => {
    history.push('/categories');
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setSearchData(fullData));
  };

  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <NavLink
        onClick={() => onClickActiveCategory(i.name)}
        to="/"
        className={classes['text-placeholder']}
        style={style}
      >
        {i.name}
      </NavLink>
    </motion.li>
  );
};
