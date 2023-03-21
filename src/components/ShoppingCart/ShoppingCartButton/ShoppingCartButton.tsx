import React from 'react';
import styles from './ShoppingCartButton.module.scss';

interface IProps {
  onClick: () => void;
}

const ShoppingCartButton: React.FC<IProps> = ({ onClick }) => (
  <div className={styles['cart-button']} onClick={onClick}>
    <div className={styles['cart-button__icon']}></div>
  </div>
);

export { ShoppingCartButton };
