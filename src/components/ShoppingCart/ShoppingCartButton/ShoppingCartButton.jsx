import React from 'react';

import styles from './ShoppingCartButton.module.scss';

const ShoppingCartButton = ({ onClick }) => (
  <div className={styles['cart-button']} onClick={onClick}>
    <div className={styles['cart-button__icon']}></div>
  </div>
);

export { ShoppingCartButton };
