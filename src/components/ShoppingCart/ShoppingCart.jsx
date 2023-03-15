import React, { useState } from 'react';

import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { ShoppingCartModal } from './ShoppingCartModal/ShoppingCartModal';

const ShoppingCart = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <ShoppingCartButton onClick={() => setShownModal(true)} />
      {shownModal && <ShoppingCartModal onClose={() => setShownModal(false)} />}
    </>
  );
};

export { ShoppingCart };
