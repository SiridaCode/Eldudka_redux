import * as React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../Container/Container';
import CustomSearch from '../../UI/CustomSearch';
import classes from './HeaderSearch.module.scss';
import { Link } from 'react-router-dom';
import { SOCIAL_MEDIA } from '../../../utils/constants';
import { SET_VISIBLE_MODAL } from '../../../redux/shoppingCart';
import { setVisibleModal } from '../../../redux/mobileMenu';

const HeaderSearch = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.headerSecond}>
      <Container>
        <div className={classes.headerSecondWrapper}>
          <div
            onClick={() => dispatch(setVisibleModal(true))}
            className={classes['mobile-menu-icon']}
          />
          <div className={classes.iconsContainer}>
            {Object.keys(SOCIAL_MEDIA).map((key, index) => (
              <a key={index} href={SOCIAL_MEDIA[key].href}>
                <img className={classes.mainIcon} src={SOCIAL_MEDIA[key].mainSrc} alt="icon" />
              </a>
            ))}
          </div>
          <Link to="/" className={classes.logo}>
            <img src="../logo.png" className={classes.logo} alt="logo"></img>
          </Link>
          <div className={classes.locationIcon}>
            <img width="14.69" height="21" src="./location.png" />
          </div>
          <div className={classes.flexBasket}>
            <CustomSearch />
            <img
              onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })}
              className={classes.basketIcon}
              width="18"
              height="18"
              src="../basket.png"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
