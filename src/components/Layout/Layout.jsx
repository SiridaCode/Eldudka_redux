import { Container } from '@mui/system';
import * as React from 'react';
import BasicBreadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import Navbar from './Navbar/Navbar';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <Navbar />
      <Container>
        <BasicBreadcrumbs />
      </Container>
      {children}
    </>
  );
};

export default Header;
