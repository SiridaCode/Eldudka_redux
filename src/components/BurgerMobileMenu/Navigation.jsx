import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import classes from './BurgerMobileMenu.module.scss';
import { SOCIAL_MEDIA } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/favorites';
import { CONTACT_PHONE_NUMBER } from '../../utils/constants';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }) => {
  const dispatch = useDispatch();

  return (
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
          {/* <img className={classes['icon']} src="./find_icon.png" /> */}
          <img
            onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })}
            className={classes['icon']}
            src="./favorites_icon.png"
          />
          <a href={`tel:+${CONTACT_PHONE_NUMBER.value}`}>
            <img className={classes['icon-end']} src="./telephone.png" />
          </a>
        </div>
      }
      <motion.ul variants={variants}>
        {itemIds.map(i => (
          <MenuItem i={i} key={i} />
        ))}
        <div className={classes.iconsContainer}>
          {Object.keys(SOCIAL_MEDIA).forEach(function (key, index) {
            return (
              <a key={index} href={SOCIAL_MEDIA[key].href}>
                <img className={classes.mainIcon} src={SOCIAL_MEDIA[key].mainSrc} alt="icon" />
              </a>
            );
          })}
        </div>
      </motion.ul>
    </>
  );
};

const itemIds = [
  { name: 'Жидкости', link: '/liquid' },
  { name: 'Одноразки', link: '/disposable' },
  { name: 'Поды', link: '/pod' },
  { name: 'Картриджи', link: '/cartridge' },
  { name: 'Испарители', link: 'evaporator' },
];
