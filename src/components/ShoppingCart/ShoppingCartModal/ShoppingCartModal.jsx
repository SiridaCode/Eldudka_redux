import React from 'react';

import { ProductQuantityItem } from '../../ProductQuantityItem/ProductQuantityItem';

import styles from './ShoppingCartModal.module.scss';

const ShoppingCartModal = ({ onClose, title, items }) => {
  return (
    <>
      <div className={styles['blackout']}></div>
      <div className={styles['modal']}>
        <div className={styles['header']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['close']} onClick={onClose}></div>
        </div>
        <div className={styles['content']}>
          {items.map(i => (
            <ProductQuantityItem key={i.id} quantityItem={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export { ShoppingCartModal };
