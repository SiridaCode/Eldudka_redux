import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/shoppingCart';
import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { ShoppingCartModal } from './ShoppingCartModal/ShoppingCartModal';

const ShoppingCart = () => {
  const isVisible = useSelector((state: any) => state.shoppingCart.isVisibleModal);
  const dispatch = useDispatch();

  return (
    <>
      <ShoppingCartButton onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })} />
      {isVisible && (
        <ShoppingCartModal onClose={() => dispatch({ type: SET_VISIBLE_MODAL, payload: false })} />
      )}
    </>
  );
};

export { ShoppingCart };
