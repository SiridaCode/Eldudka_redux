import * as React from 'react';
import BasicBreadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <HeaderCategory />
      <BasicBreadcrumbs />
      {children}
    </>
  );
};

export default Header;
