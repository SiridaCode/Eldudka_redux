import React, { useEffect, useState, useCallback } from 'react';
import {
  getArray,
  updateArrayElementById,
  deleteArrayElementById,
} from '../../../utils/localStorage';
import { ProductQuantityItem } from '../../ProductQuantityItem/ProductQuantityItem';
import styles from './ShoppingCartModal.module.scss';

const getProductsByIds = async ids => {
  const response = await fetch('http://localhost:5195/Product/GetByIds', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ids),
  });

  return await response.json();
};

const productMapping = product => {
  return {
    id: product.uuid,
    image: product.images.length === 0 ? '' : product.images[0],
    name: product.name,
    amount: product.amount,
    price: product.price,
  };
};

const ShoppingCartModal = ({ onClose }) => {
  const [items, setItems] = useState([]);

  const updateDataFromLocalStorage = useCallback(() => {
    const lsItems = getArray('productCart');

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

  return (
    <>
      <div className={styles['blackout']}></div>
      <div className={styles['modal']}>
        <div className={styles['header']}>
          <div className={styles['title']}>Корзина</div>
          <div className={styles['close']} onClick={onClose}></div>
        </div>
        <div className={styles['content']}>
          {items.length > 0 ? (
            items.map((i, index) => (
              <div key={i.id} style={index + 1 !== items.length ? { marginBottom: '15px' } : {}}>
                <ProductQuantityItem
                  quantityItem={i}
                  downItemHandler={item => {
                    if (item.amount < 1) deleteArrayElementById('productCart', item.id);
                    else
                      updateArrayElementById('productCart', { id: item.id, amount: item.amount });
                    updateDataFromLocalStorage();
                  }}
                  upItemHandler={item => {
                    if (item.amount < 1) deleteArrayElementById('productCart', item.id);
                    else
                      updateArrayElementById('productCart', { id: item.id, amount: item.amount });
                    updateDataFromLocalStorage();
                  }}
                  removeItemHandler={item => {
                    deleteArrayElementById('productCart', item.id);
                    updateDataFromLocalStorage();
                  }}
                />
              </div>
            ))
          ) : (
            <span className={styles['no-products']}>Товары не добавлены</span>
          )}
        </div>
        {items.length > 0 && (
          <div className={styles['footer']}>
            <div className={styles['order-btn']}>Заказать</div>
            <div className={styles['order-price']}>
              <span className={styles['value']}>
                {items.length === 0
                  ? '0 '
                  : `${items.reduce((acc, curr) => acc + curr.amount * curr.price, 0)} `}
                ₽
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { ShoppingCartModal, getProductsByIds, productMapping };
