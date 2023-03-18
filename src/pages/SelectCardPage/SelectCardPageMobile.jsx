import Container from '../../components/Container/Container';
import classes from './SelectCardPageMobile.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const SelectCardPageMobile = ({ responseData }) => {
  return (
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
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              {responseData &&
                responseData.images.map(item => (
                  <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }} key={item}>
                    <img className={classes['image-card']} src={item}></img>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className={classes['product-name']}>{responseData.name}</div>
          <div className={classes['product-price']}>{responseData.price} ₽</div>
          <div className={classes['flex-block']}>
            <button className={classes['button-basket']}>В корзину</button>
            <button className={classes['button-favorites']}>
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
  );
};

export default SelectCardPageMobile;
