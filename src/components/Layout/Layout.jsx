import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { FavoritesModal } from '../FavoritesModal/FavoritesModal';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <HeaderCategory />
      <ShoppingCart />
      <FavoritesModal />
      {children}
    </>
  );
};

export { Layout };
