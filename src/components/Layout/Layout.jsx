import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <HeaderCategory />
      {children}
    </>
  );
};

export default Header;
