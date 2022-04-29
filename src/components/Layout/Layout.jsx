import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Header = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Header;
