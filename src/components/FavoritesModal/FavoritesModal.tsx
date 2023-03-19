import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArrayElementById, getArray } from '../../utils/localStorage';
import { SET_VISIBLE_MODAL } from '../../redux/favorites';
import { RightModal } from '../RightModal/RightModal';
import { HorizontalProductCardWithQuantitySwitch } from '../HorizontalProductCardWithQuantitySwitch/HorizontalProductCardWithQuantitySwitch';
import {
  getProductsByIds,
  productMapping,
} from '../ShoppingCart/ShoppingCartModal/ShoppingCartModal';
import styles from './FavoritesModal.module.scss';

const localStorageKeyName = 'favorites';

const FavoritesModal = () => {
  const [items, setItems] = useState<any>([]);
  const isVisible = useSelector((state: any) => state.favorites.isVisibleModal);

  const dispatch = useDispatch();

  const updateDataFromLocalStorage = useCallback(() => {
    const lsItems = getArray(localStorageKeyName);

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

  useEffect(() => updateDataFromLocalStorage(), []);

  if (isVisible)
    return (
      <RightModal
        title="Избранное"
        onClose={() => dispatch({ type: SET_VISIBLE_MODAL, payload: false })}
      >
        {items.length > 0 ? (
          items.map((i, index) => (
            <div key={i.id} style={index + 1 !== items.length ? { marginBottom: '15px' } : {}}>
              <HorizontalProductCardWithQuantitySwitch
                isQuantityChange={false}
                quantityItem={i}
                removeItemHandler={item => {
                  deleteArrayElementById(localStorageKeyName, item.id);
                  updateDataFromLocalStorage();
                }}
              />
            </div>
          ))
        ) : (
          <span className={styles['no-products']}>Товары не добавлены</span>
        )}
      </RightModal>
    );
};

export { FavoritesModal };
