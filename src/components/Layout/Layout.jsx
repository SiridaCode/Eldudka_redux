import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import Navbar from './Navbar/Navbar';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <Navbar />
      {children}
    </>
  );
};

export default Header;
