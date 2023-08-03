import React, { useCallback } from 'react';
import { HorizontalProductCardWithQuantitySwitch } from '../../HorizontalProductCardWithQuantitySwitch/HorizontalProductCardWithQuantitySwitch';
import { RightModal } from '../../RightModal/RightModal';
import { CONTACT_PHONE_NUMBER, API_URL, WHATSAPP_URL } from '../../../utils/constants';
import styles from './ShoppingCartModal.module.scss';
import { Button } from '../../Button/Button';

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

const ShoppingCartModal = ({ onClose, items, itemsOnChange }) => {
  const makeOrder = useCallback(() => {
    let url = `${WHATSAPP_URL}/${CONTACT_PHONE_NUMBER.value}?text=`;
    items.forEach(
      (item, index) =>
        (url += encodeURIComponent(`${index + 1}. ${item.name} - ${item.amount} шт | `))
    );

    window.open(url);
  }, [items]);

  return (
    <RightModal title="Корзина" onClose={onClose}>
      {items.length > 0 ? (
        items.map((i, index) => (
          <div key={i.id} style={index + 1 !== items.length ? { marginBottom: '15px' } : {}}>
            <HorizontalProductCardWithQuantitySwitch
              isQuantityChange={true}
              quantityItem={i}
              downItemHandler={item => {
                itemsOnChange(
                  items
                    .map(i => (i.id === item.id ? { ...item, amount: item.amount - 1 } : i))
                    .filter(i => i.amount > 0)
                );
              }}
              upItemHandler={item => {
                itemsOnChange(
                  items.map(i => (i.id === item.id ? { ...item, amount: item.amount + 1 } : i))
                );
              }}
              removeItemHandler={item => {
                itemsOnChange(items.filter(i => i.id !== item.id));
              }}
            />
          </div>
        ))
      ) : (
        <span className={styles['no-products']}>Товары не добавлены</span>
      )}
      {items.length > 0 && (
        <div className={styles['footer']}>
          <Button onClick={() => makeOrder()} text="Заказать"></Button>
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
