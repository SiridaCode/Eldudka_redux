import * as React from 'react';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { FavoritesModal } from '../FavoritesModal/FavoritesModal';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSearch />
      <HeaderCategory />
      <ShoppingCart />
      <FavoritesModal />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
