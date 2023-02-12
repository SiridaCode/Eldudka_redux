import React, { useEffect, useState } from 'react';

import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { ShoppingCartModal } from './ShoppingCartModal/ShoppingCartModal';

import { getArray } from '../../utils/localStorage';

const ShoppingCart = () => {
  const [shownModal, setShownModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const lsItems = getArray('productCart');

    fetch('http://localhost:5195/Product/GetByIds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lsItems.map(i => i.id)),
    })
      .then(response => response.json())
      .then(data =>
        setItems(
          data.map(v => {
            return {
              id: v.uuid,
              image: v.images.length === 0 ? '' : v.images[0],
              name: v.name,
              amount: lsItems.find(itm => itm.id === v.uuid).amount,
              price: v.price,
            };
          })
        )
      );
  }, []);

  return (
    <>
      <ShoppingCartButton onClick={() => setShownModal(true)} />
      {shownModal && (
        <ShoppingCartModal
          title="Корзина"
          items={items}
          onClose={() => setShownModal(false)}
          // downItemHandler={items => console.log(123)}
          // upItemHandler={items => console.log(123)}
          // removeItemHandler={items => console.log(123)}
        />
      )}
    </>
  );
};

export { ShoppingCart };
