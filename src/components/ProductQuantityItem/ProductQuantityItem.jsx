import React from 'react';

import styles from './ProductQuantityItem.module.scss';

const ProductQuantityItem = ({ quantityItem }) => {
  return (
    <div className={styles['product-quantity__item']}>
      <div
        className={styles['image']}
        style={{ backgroundImage: `url(${quantityItem.image})` }}
      ></div>
      <div className={styles['name-and-amount']}>
        <div className={styles['name']}>{quantityItem.name}</div>
        <div className={styles['amount']}>
          <div className={`${styles['down-btn']} ${styles['change-amount-btn']}`}></div>
          <div className={styles['value']}>{quantityItem.amount}</div>
          <div className={`${styles['up-btn']} ${styles['change-amount-btn']}`}></div>
        </div>
      </div>
      <div className={styles['total-cost']}>{quantityItem.price * quantityItem.amount} ₽</div>
      <div className={styles['remove-btn-wrapper']}></div>
    </div>
  );
};

export { ProductQuantityItem };
