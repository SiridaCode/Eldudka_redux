import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategories from './HeaderCategories/HeaderCategories';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <HeaderCategories />
      {children}
    </>
  );
};

export default Header;
