import * as React from 'react';
import Container from '../../Container/Container';
import CustomSearch from '../../UI/CustomSearch';
import classes from './HeaderSearch.module.scss';

const HeaderSearch = () => {
  return (
    <header className={classes.headerSecond}>
      <Container>
        <div className={classes.headerSecondWrapper}>
          <div className={classes.logo}>
            <img src="../logo.png" className={classes.logo} alt="logo"></img>
          </div>
          <CustomSearch />
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
