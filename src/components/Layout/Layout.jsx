import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Header = ({ children }) => {
  return (
    <>
      <HeaderSearch />
      <HeaderCategory />
      <Banner />
      {children}
      <Footer />
    </>
  );
};

export default Header;
