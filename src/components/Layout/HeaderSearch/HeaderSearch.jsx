import * as React from 'react';
import './styles.css';
import Container from '../../Container/Container';
import SelectSearch from './SelectSearch';

const HeaderSearch = () => {
  return (
    <header className="header-second">
      <Container>
        <div className="header-second-wrapper">
          <div className="logo">
            <img src="../logo.png" className="logo" alt="logo"></img>
          </div>
          <SelectSearch />
        </div>
      </Container>
    </header>
  );
};
export default HeaderSearch;
