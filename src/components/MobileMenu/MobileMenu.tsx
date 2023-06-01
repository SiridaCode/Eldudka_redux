import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { setActiveCategory, setFilterData, setSearchData } from '../../redux/data/dataActions';
import { filteredProductsByCategory } from '../../utils/filter';
import { setVisibleModal as setVisibleFavoritesModal } from '../../redux/favorites';
import { setVisibleModal as setVisibleMobileModal } from '../../redux/mobileMenu';
import { CONTACT_PHONE_NUMBER, SOCIAL_MEDIA } from '../../utils/constants';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const isVisible = useSelector((state: any) => state.mobileMenu.isVisibleModal);
  const dispatch = useDispatch();
  const fullData = useSelector((state: any) => state.data.fullData);

  const hide = () => {
    dispatch(setVisibleMobileModal(false));
  };

  const chooseCategory = category => {
    const filter = filteredProductsByCategory(fullData, category);
    dispatch(setActiveCategory(category));
    dispatch(setFilterData(filter));
    dispatch(setSearchData(fullData));
    hide();
  };

  if (isVisible) {
    return (
      <div className={styles['mobile-menu']}>
        <div className={styles['mobile-menu__header']}>
          <a onClick={hide} className={styles['header__close-button']} />
          <div className={styles['header__right-side']}>
            {/* <div className={`${styles['header__search-button']} ${styles['header__button']}`} /> */}
            <a
              onClick={() => dispatch(setVisibleFavoritesModal(true))}
              className={`${styles['header__favorites-button']} ${styles['header__button']}`}
            />
            <a
              href={`tel:+${CONTACT_PHONE_NUMBER.value}`}
              className={`${styles['header__phone-call-button']} ${styles['header__button']}`}
            />
          </div>
        </div>
        <ul className={styles['mobile-menu__categories']}>
          <li onClick={() => chooseCategory('Поды')}>Поды</li>
          <li onClick={() => chooseCategory('Испарители')}>Испарители</li>
          <li onClick={() => chooseCategory('Жидкости')}>Жидкости</li>
          <li onClick={() => chooseCategory('Картриджи')}>Картриджи</li>
          <li onClick={() => chooseCategory('Однаразки')}>Однаразки</li>
        </ul>
        <div className={styles['mobile-menu__social-networks']}>
          <a
            href={SOCIAL_MEDIA.instagram.href}
            className={`${styles['social-networks__instagram']} ${styles['social-network']}`}
          />
          <a
            href={SOCIAL_MEDIA.telegram.href}
            className={`${styles['social-networks__telegram']} ${styles['social-network']}`}
          />
          <a
            href={SOCIAL_MEDIA.vk.href}
            className={`${styles['social-networks__vk']} ${styles['social-network']}`}
          />
        </div>
      </div>
    );
  }
};

export { MobileMenu };
