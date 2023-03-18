import * as React from 'react';
import Container from '../../Container/Container';
import CustomSearch from '../../UI/CustomSearch';
import classes from './HeaderSearch.module.scss';
import { Link } from 'react-router-dom';
import { src } from '../../../utils/utils';
import BurgerMobileMenu from '../../BurgerMobileMenu/BurgerMobileMenu';
import useWindowSize from '../../../hooks/UseWindowResize';

const HeaderSearch = () => {
  const { width } = useWindowSize();
  return (
    <header className={classes.headerSecond}>
      <Container>
        <div className={classes.headerSecondWrapper}>
          <div className={classes.iconsContainer}>
            {width < 860 && <BurgerMobileMenu />}
            {src.map(({ href, mainSrc }, index) => (
              <a key={index} href={href}>
                <img className={classes.mainIcon} src={mainSrc} alt="icon" />
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
            <img className={classes.basketIcon} width="18" height="18" src="../basket.png" />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
