import * as React from 'react';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderPhone />
      <HeaderSearch />
      <HeaderCategory />
      <ShoppingCart />
      {children}
    </>
  );
};

export { Layout };
