import React, { useEffect } from 'react';
import styles from './ShoppingCartButton.module.scss';

interface IProps {
  onClick: () => void;
  items: any;
  updateDataFromLocalStorage: any;
}

const ShoppingCartButton: React.FC<IProps> = ({ onClick, items, updateDataFromLocalStorage }) => {
  useEffect(() => updateDataFromLocalStorage(), [items]);

  return (
    <div className={styles['cart-button']} onClick={onClick}>
      <div className={styles['cart-button__icon']}></div>
      {items.length >= 1 && <div className={styles['styled-num']}>{items.length}</div>}
    </div>
  );
};

export { ShoppingCartButton };
