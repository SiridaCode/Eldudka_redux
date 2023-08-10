import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_VISIBLE_MODAL } from '../../redux/favorites';
import { RightModal } from '../RightModal/RightModal';
import { HorizontalProductCardWithQuantitySwitch } from '../HorizontalProductCardWithQuantitySwitch/HorizontalProductCardWithQuantitySwitch';
import {
  getProductsByIds,
  productMapping,
} from '../ShoppingCart/ShoppingCartModal/ShoppingCartModal';
import styles from './FavoritesModal.module.scss';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { useLocalStorage } from 'usehooks-ts';

const FavoritesModal = () => {
  const [favorites, setFavorites] = useLocalStorage<any>(LOCALSTORAGE_KEYS.favorites, []);
  const [items, setItems] = useState<any>([]);
  const isVisible = useSelector((state: any) => state.favorites.isVisibleModal);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductsByIds(favorites.map((p: any) => p.id)).then(data =>
      setItems(
        data.map(v => {
          return productMapping({
            ...v,
            amount: favorites.find((itm: any) => itm.id === v.uuid).amount,
          });
        })
      )
    );
  }, []);

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
                  setFavorites(items.filter(i => i.id !== item.id));
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
