import Container from '../../components/Container/Container';
import classes from './SelectCardPageMobile.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { insertElementInArray, getArray, updateArrayElementById } from '../../utils/localStorage';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';
import { Button } from '../../components/Button/Button';

const SelectCardPageMobile = ({ responseData }) => {
  return (
    responseData && (
      <div className={classes['flex-block-center']}>
        <Container>
          <div className={classes['back-btn-icon']}>
            <img src="./back_btn_icon.png" />
          </div>
          <div className={classes['flex-block-center']}>
            <div className={classes['image-container']}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {responseData.images.map(item => (
                  <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }} key={item}>
                    <img className={classes['image-card']} src={item}></img>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={classes['product-name']}>{responseData.name}</div>
            <div className={classes['product-price']}>{responseData.price} ₽</div>
            <div className={classes['flex-block']}>
              <Button
                onClick={() => {
                  const shoppingCartProducts = getArray(LOCALSTORAGE_KEYS.shoppingCart);

                  for (let p of shoppingCartProducts) {
                    if (p.id == responseData.uuid) {
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
                    if (f.id == responseData.uuid) return;
                  }

                  insertElementInArray(LOCALSTORAGE_KEYS.favorites, {
                    id: responseData.uuid,
                  });
                }}
                className={classes['button-favorites']}
              >
                <img width="20" height="20" src="./heard-icon.png"></img>
              </button>
            </div>
            <div className={classes['product-description']}>{responseData.description}</div>
            <div className={classes['location']}>
              <img width="15" height="21" src="./Vector.png"></img>
              <p className={classes['location-availability']}>Наличие в магазинах</p>
            </div>
            <div className={classes['product-availability']}>
              {responseData.availability.map(item => (
                <div>
                  <span className={classes['availability-shop-name']}>{item.shop.name} </span>
                  <span className={classes['availability-shop-count']}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    )
  );
};

export default SelectCardPageMobile;
