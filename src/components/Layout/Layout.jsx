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
      <BasicBreadcrumbs />
      {children}
    </>
  );
};

export default Header;
