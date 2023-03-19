import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import classes from './BurgerMobileMenu.module.scss';
import { src } from '../../utils/utils';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }) => (
  <>
    {
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '30px',
          color: 'black',
        }}
      >
        <img className={classes['icon']} src="./find_icon.png" />
        <img className={classes['icon']} src="./favorites_icon.png" />
        <img className={classes['icon-end']} src="./telephone.png" />
      </div>
    }
    <motion.ul variants={variants}>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
      <div className={classes.iconsContainer}>
        {src.map(({ href, mainSrc }, index) => (
          <a key={index} href={href}>
            <img className={classes.mainIcon} src={mainSrc} alt="icon" />
          </a>
        ))}
      </div>
    </motion.ul>
  </>
);

const itemIds = [
  { name: 'Жидкости', link: '/liquid' },
  { name: 'Одноразки', link: '/disposable' },
  { name: 'Поды', link: '/pod' },
  { name: 'Картриджи', link: '/cartridge' },
  { name: 'Испарители', link: 'evaporator' },
];
