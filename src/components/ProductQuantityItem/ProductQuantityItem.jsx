import React from 'react';

import styles from './ProductQuantityItem.module.scss';

const ProductQuantityItem = ({
  quantityItem,
  downItemHandler,
  upItemHandler,
  removeItemHandler,
}) => {
  return (
    <div className={styles['product-quantity__item']}>
      <div className={styles['image']}>
        <img src={quantityItem.image} alt="Картинка товара" />
      </div>
      <div className={styles['name-and-amount']}>
        <div className={styles['name']}>
          <span>{quantityItem.name}</span>
        </div>
        <div className={styles['amount']}>
          <div
            onClick={() => downItemHandler({ ...quantityItem, amount: quantityItem.amount - 1 })}
            className={`${styles['down-btn']} ${styles['change-amount-btn']}`}
          ></div>
          <div className={styles['value']}>
            <span>{quantityItem.amount}</span>
          </div>
          <div
            onClick={() => upItemHandler({ ...quantityItem, amount: quantityItem.amount + 1 })}
            className={`${styles['up-btn']} ${styles['change-amount-btn']}`}
          ></div>
        </div>
      </div>
      <div className={styles['total-cost']}>
        <span>{quantityItem.price * quantityItem.amount} ₽</span>
      </div>
      <div onClick={() => removeItemHandler(quantityItem)} className={styles['remove-btn-wrapper']}>
        <div className={styles['btn']}></div>
      </div>
    </div>
  );
};

export { ProductQuantityItem };
