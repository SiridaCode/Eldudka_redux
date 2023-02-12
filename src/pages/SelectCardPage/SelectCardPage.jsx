import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '../../components/Container/Container';
import classes from './SelectCardPage.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const SelectCardPage = () => {
  let [responseData, setResponseData] = useState(null);

  let { card } = useParams();

  useEffect(() => {
    fetch(`https://api.eldudka.ru/Product/GetById?id=${card}`)
      .then(response => response.json())
      .then(data => {
        setResponseData(data);
      });
  }, []);

  const [eng, rus] = responseData ? responseData.name.split('(') : ['', ''];

  return (
    responseData && (
      <div className={classes['cards-wrapper']}>
        <Container>
        <div className={classes['flex-block']}>
          <div className={classes['image-block']}>
            <div className={classes['image-container']}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                  {responseData.images.map((item) => (
                    <SwiperSlide style={{display: 'flex', justifyContent: 'center'}} key={item}><img className={classes['image-card']} src={item}></img></SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className={classes['content-block']}>
            <div className={classes['product-name']}>{responseData.name}</div>
            <div className={classes['product-price']}>{responseData.price} ₽</div>
            <div className={classes['flex-block-center']}>
            <button className={classes['button-basket']}>В корзину</button>
            <button className={classes['button-favorites']}><img src='./heard-icon.png'></img></button>
            </div>
            <div className={classes['product-description']}>{responseData.description}</div>
            <div className={classes['location']}>
              <img src='./Vector.png'></img>
              <p className={classes['location-availability']}>Наличие в магазинах</p>
            </div>
            <div className={classes['product-availability']}>
            {responseData.availability.map((item) => (
              <div>
              <span className={classes['availability-shop-name']}>{item.shop.name} </span>
              <span className={classes['availability-shop-count']}>{item.count}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
        </Container>
      </div>
    )
  );
};

export default SelectCardPage;
