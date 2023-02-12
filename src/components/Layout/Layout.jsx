import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Benefits from './Benefits/Benefits';

const Header = ({ children }) => {
  return (
    <>
      <HeaderSearch />
      <HeaderCategory />
      {children}
      <Footer />
    </>
  );
};

export default Header;
