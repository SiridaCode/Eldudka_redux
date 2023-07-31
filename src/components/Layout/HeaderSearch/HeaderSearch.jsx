import * as React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../Container/Container';
import CustomSearch from '../../UI/CustomSearch';
import classes from './HeaderSearch.module.scss';
import { SOCIAL_MEDIA } from '../../../utils/constants';
import { setVisibleModal } from '../../../redux/mobileMenu';
import { Logo } from '../../Logo/Logo';

const HeaderSearch = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.headerSecond}>
      <div className={classes['mobile-block']}>
        <Logo />
        <div
          onClick={() => dispatch(setVisibleModal(true))}
          className={classes['mobile-menu-icon']}
        />
      </div>
      <Container>
        <div className={classes.headerSecondWrapper}>
          <CustomSearch />
          <div className={classes['desktop-logo']}>
            <Logo />
          </div>
          <div className={classes.iconsContainer}>
            {Object.keys(SOCIAL_MEDIA).map((key, index) => (
              <a key={index} href={SOCIAL_MEDIA[key].href}>
                <img className={classes.mainIcon} src={SOCIAL_MEDIA[key].mainSrc} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
