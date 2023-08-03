import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import styles from './ShoppingCartButton.module.scss';

interface IProps {
  onClick: () => void;
}

const ShoppingCartButton: React.FC<IProps> = ({ onClick }) => {
  const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', []);

  return (
    <div className={styles['cart-button']} onClick={onClick}>
      <div className={styles['cart-button__icon']}></div>
      {shoppingCart.length >= 1 && (
        <div className={styles['styled-num']}>
          {shoppingCart.reduce((acc, curr: any) => acc + curr.amount, 0)}
        </div>
      )}
    </div>
  );
};

export { ShoppingCartButton };
