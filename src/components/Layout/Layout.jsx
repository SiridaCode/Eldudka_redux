import * as React from 'react';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { FavoritesModal } from '../FavoritesModal/FavoritesModal';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ background: '#fbfbfb' }}>
      <HeaderSearch />
      <HeaderCategory />
      <ShoppingCart />
      <FavoritesModal />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
