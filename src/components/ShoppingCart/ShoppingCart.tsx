import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/shoppingCart';
import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import {
  ShoppingCartModal,
  getProductsByIds,
  productMapping,
} from './ShoppingCartModal/ShoppingCartModal';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { getArray } from '../../utils/localStorage';

const ShoppingCart = () => {
  const isVisible = useSelector((state: any) => state.shoppingCart.isVisibleModal);
  const [items, setItems] = useState<any>([]);
  const dispatch = useDispatch();

  const updateDataFromLocalStorage = useCallback(() => {
    const lsItems = getArray(LOCALSTORAGE_KEYS.shoppingCart);

    getProductsByIds(lsItems.map(i => i.id)).then(data =>
      setItems(
        data.map(v => {
          return productMapping({
            ...v,
            amount: lsItems.find(itm => itm.id === v.uuid).amount,
          });
        })
      )
    );
  }, [items]);

  if (isVisible)
    return (
      <ShoppingCartModal
        onClose={() => dispatch({ type: SET_VISIBLE_MODAL, payload: false })}
        updateDataFromLocalStorage={updateDataFromLocalStorage}
        items={items}
      />
    );
  else
    return (
      <ShoppingCartButton
        onClick={() => dispatch({ type: SET_VISIBLE_MODAL, payload: true })}
        updateDataFromLocalStorage={updateDataFromLocalStorage}
        items={items}
      />
    );
};

export { ShoppingCart };
