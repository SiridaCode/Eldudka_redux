import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/shoppingCart';
import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import {
  ShoppingCartModal,
  getProductsByIds,
  productMapping,
} from './ShoppingCartModal/ShoppingCartModal';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { useLocalStorage } from 'usehooks-ts';

const ShoppingCart = () => {
  const isVisible = useSelector((state: any) => state.shoppingCart.isVisibleModal);
  const dispatch = useDispatch();
  const [shoppingCart, setShoppingCart] = useLocalStorage<any[]>(
    LOCALSTORAGE_KEYS.shoppingCart,
    []
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProductsByIds(shoppingCart.map((p: any) => p.id)).then(data =>
      setItems(
        data.map(v => {
          return productMapping({
            ...v,
            amount: shoppingCart.find((itm: any) => itm.id === v.uuid).amount,
          });
        })
      )
    );
  }, [shoppingCart]);

  return isVisible ? (
    <ShoppingCartModal
      onClose={() => dispatch({ type: SET_VISIBLE_MODAL, payload: false })}
      itemsOnChange={items => {
        setShoppingCart(items);
      }}
      items={items}
    />
  ) : (
    <ShoppingCartButton onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })} />
  );
};

export { ShoppingCart };
