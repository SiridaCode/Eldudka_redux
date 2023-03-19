import React, { useEffect, useState, useCallback } from 'react';
import {
  getArray,
  updateArrayElementById,
  deleteArrayElementById,
} from '../../../utils/localStorage';
import { HorizontalProductCardWithQuantitySwitch } from '../../HorizontalProductCardWithQuantitySwitch/HorizontalProductCardWithQuantitySwitch';
import { RightModal } from '../../RightModal/RightModal';
import { CONTACT_PHONE_NUMBER, API_URL, WHATSAPP_URL } from '../../../utils/constants';
import styles from './ShoppingCartModal.module.scss';

const localStorageKeyName = 'shoppingCart';

const getProductsByIds = async ids => {
  const response = await fetch(`${API_URL}/Product/GetByIds`, {
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
  const [items, setItems] = useState<any>([]);

  const makeOrder = useCallback(() => {
    let url = `${WHATSAPP_URL}/${CONTACT_PHONE_NUMBER.value}?text=`;
    items.forEach(
      (item, index) =>
        (url += encodeURIComponent(`${index + 1}. ${item.name} - ${item.amount} шт | `))
    );

    window.open(url);
  }, [items]);

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

  return (
    <RightModal title="Корзина" onClose={onClose}>
      {items.length > 0 ? (
        items.map((i, index) => (
          <div key={i.id} style={index + 1 !== items.length ? { marginBottom: '15px' } : {}}>
            <HorizontalProductCardWithQuantitySwitch
              isQuantityChange={true}
              quantityItem={i}
              downItemHandler={item => {
                const modifiedItem = { ...item, amount: item.amount - 1 };

                if (modifiedItem.amount < 1)
                  deleteArrayElementById(localStorageKeyName, modifiedItem.id);
                else
                  updateArrayElementById(localStorageKeyName, {
                    id: modifiedItem.id,
                    amount: modifiedItem.amount,
                  });

                updateDataFromLocalStorage();
              }}
              upItemHandler={item => {
                const modifiedItem = { ...item, amount: item.amount + 1 };

                if (modifiedItem.amount < 1)
                  deleteArrayElementById(localStorageKeyName, modifiedItem.id);
                else
                  updateArrayElementById(localStorageKeyName, {
                    id: modifiedItem.id,
                    amount: modifiedItem.amount,
                  });

                updateDataFromLocalStorage();
              }}
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
      {items.length > 0 && (
        <div className={styles['footer']}>
          <div onClick={() => makeOrder()} className={styles['order-btn']}>
            Заказать
          </div>

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
    </RightModal>
  );
};

export { ShoppingCartModal, getProductsByIds, productMapping };
