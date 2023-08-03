import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../utils/constants';
import Container from '../../components/Container/Container';
import ContentLoader from 'react-content-loader';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { Button } from '../../components/Button/Button';
import classes from './ProductCard.module.scss';

const ProductCard = () => {
  let [responseData, setResponseData] = useState(null);
  const [shoppingCart, setShoppingCart] = useLocalStorage(LOCALSTORAGE_KEYS.shoppingCart, []);
  const [favorites, setFavorites] = useLocalStorage(LOCALSTORAGE_KEYS.favorites, []);

  let { card } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/Product/GetById?id=${card}`)
      .then(response => response.json())
      .then(data => {
        setResponseData(data);
      });
  }, [card]);

  const existsCurrentProductInShoppingCart = () =>
    shoppingCart.filter(p => p.id === responseData.uuid).length > 0;

  const existsCurrentProductInFavorites = () =>
    responseData ? favorites.filter(p => p.id === responseData.uuid).length > 0 : null;

  return responseData ? (
    <div className={classes['cards-wrapper']}>
      <Container>
        <div className={classes['flex-block']}>
          {responseData.images.map((item, index) => (
            <img key={index} className={classes['image-card']} src={item} alt="" />
          ))}
          <div className={classes['content-block']}>
            <div className={classes['product-name']}>{responseData.name}</div>
            <div className={classes['product-price']}>{responseData.price} ₽</div>
            <div className={classes['flex-block-center']}>
              <Button
                onClick={() => {
                  const shoppingCartNewArray = shoppingCart.map(p => p);

                  if (!existsCurrentProductInShoppingCart()) {
                    shoppingCartNewArray.push({ id: responseData.uuid, amount: 1 });
                    setShoppingCart(shoppingCartNewArray);
                  } else {
                    setShoppingCart(shoppingCartNewArray.filter(p => p.id !== responseData.uuid));
                  }
                }}
                text={existsCurrentProductInShoppingCart() ? 'Добавлен' : 'В корзину'}
                style={existsCurrentProductInShoppingCart() ? 'active' : 'default'}
              />
              <button
                onClick={() => {
                  const favoritesNewArray = favorites.map(p => p);

                  if (!existsCurrentProductInFavorites()) {
                    favoritesNewArray.push({ id: responseData.uuid });
                    setFavorites(favoritesNewArray);
                  } else {
                    setFavorites(favoritesNewArray.filter(p => p.id !== responseData.uuid));
                  }
                }}
                className={`${classes['button-favorites']} ${
                  existsCurrentProductInFavorites() ? classes['active'] : ''
                }`}
              >
                <img className={classes['heart-icon']} src="./heard-icon.png" alt="" />
              </button>
            </div>
            <div className={classes['product-description']}>{responseData.description}</div>
            <div className={classes['location']}>
              <img src="./Vector.png" alt="" />
              <p className={classes['location-availability']}>Наличие в магазинах</p>
            </div>
            <div className={classes['product-availability']}>
              {responseData.availability.map((item, index) => (
                <div key={index}>
                  <span className={classes['availability-shop-name']}>{item.shop.name} </span>
                  <span className={classes['availability-shop-count']}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <Container>
      <div style={{ margin: '100px 50px' }} className={classes['content-block']}>
        <ContentLoader
          speed={2}
          width={2500}
          height={700}
          viewBox="0 0 1300 400"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="374" y="156" rx="17" ry="17" width="101" height="30" />
          <circle cx="502" cy="171" r="18" />
          <rect x="357" y="68" rx="30" ry="30" width="188" height="36" />
          <rect x="416" y="114" rx="29" ry="29" width="76" height="23" />
          <rect x="317" y="18" rx="30" ry="30" width="264" height="41" />
          <rect x="4" y="-4" rx="51" ry="51" width="262" height="318" />
        </ContentLoader>
      </div>
    </Container>
  );
};

export { ProductCard };
