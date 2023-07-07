import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/shoppingCart';
import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { ShoppingCartModal } from './ShoppingCartModal/ShoppingCartModal';

const ShoppingCart = () => {
  const isVisible = useSelector((state: any) => state.shoppingCart.isVisibleModal);
  const dispatch = useDispatch();

  if (isVisible)
    return (
      <ShoppingCartModal onClose={() => dispatch({ type: SET_VISIBLE_MODAL, payload: false })} />
    );
  else
    return (
      <ShoppingCartButton onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })} />
    );
};

export { ShoppingCart };
