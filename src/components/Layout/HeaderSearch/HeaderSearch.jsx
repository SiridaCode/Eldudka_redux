import * as React from 'react';
import Container from '../../Container/Container';
import CustomSearch from '../../UI/CustomSearch';
import classes from './HeaderSearch.module.scss';
import { Link } from 'react-router-dom';

const HeaderSearch = () => {
  return (
    <header className={classes.headerSecond}>
      <Container>
        <div className={classes.headerSecondWrapper}>
          <Link to="/">
            <div className={classes.logo}>
              <img src="../logo.png" className={classes.logo} alt="logo"></img>
            </div>
          </Link>

          <CustomSearch />
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
