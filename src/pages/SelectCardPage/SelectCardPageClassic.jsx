import React from 'react';
import Container from '../../components/Container/Container';
import classes from './SelectCardPage.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import ContentLoader from 'react-content-loader';
import { insertElementInArray, getArray, updateArrayElementById } from '../../utils/localStorage';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { Button } from '../../components/Button/Button';

const SelectCardPageClassic = ({ responseData }) => {
  return responseData ? (
    <div className={classes['cards-wrapper']}>
      <Container>
        <div className={classes['flex-block']}>
          <div className={classes['image-block']}>
            <div className={classes['image-container']}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {responseData.images.map((item, index) => (
                  <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }} key={index}>
                    <img className={classes['image-card']} src={item} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={classes['content-block']}>
            <div className={classes['product-name']}>{responseData.name}</div>
            <div className={classes['product-price']}>{responseData.price} ₽</div>
            <div className={classes['flex-block-center']}>
              <Button
                onClick={() => {
                  const shoppingCartProducts = getArray(LOCALSTORAGE_KEYS.shoppingCart);

                  for (let p of shoppingCartProducts) {
                    if (p.id === responseData.uuid) {
                      updateArrayElementById(LOCALSTORAGE_KEYS.shoppingCart, {
                        id: p.id,
                        amount: p.amount + 1,
                      });
                      return;
                    }
                  }

                  insertElementInArray(LOCALSTORAGE_KEYS.shoppingCart, {
                    id: responseData.uuid,
                    amount: 1,
                  });
                }}
                text="В корзину"
              ></Button>
              <button
                onClick={() => {
                  const favorites = getArray(LOCALSTORAGE_KEYS.favorites);

                  for (let f of favorites) {
                    if (f.id === responseData.uuid) return;
                  }

                  insertElementInArray(LOCALSTORAGE_KEYS.favorites, {
                    id: responseData.uuid,
                  });
                }}
                className={classes['button-favorites']}
              >
                <img src="./heard-icon.png" alt="" />
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

export default SelectCardPageClassic;
