import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '../../components/Container/Container';
import classes from './SelectCardPage.module.scss';
import { API_URL } from '../../utils/constants';

const SelectCardPage = () => {
  let [responseData, setResponseData] = useState(null);

  let { card } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/Product/GetById?id=${card}`)
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
          <div className={classes['product-item-select']}>
            <div className={classes['select-card-name']}>{eng + ' ' + rus}</div>
            <div className={classes['product-item-image']}>
              {responseData.images.length > 0 ? (
                <img
                  src={responseData.images[0]}
                  className={classes['product-item-image-select']}
                  alt="Нет картинки"
                />
              ) : (
                <img
                  src={'Нет картинки'}
                  className={classes['product-item-image-none']}
                  alt="Нет картинки"
                />
              )}
            </div>
            <div className={classes['select-card-description']}>
              {responseData.description ? responseData.description : 'Нет описания'}
            </div>
            <div className={classes['value-price-container']}>
              {`Цена: `}
              <span className={classes['font-weight']}>{`${responseData.price} ₽`}</span>
            </div>
            {responseData.availability.map(({ shop, count }) => (
              <div className={classes['bottom-container']} key={shop.id}>
                <span className={classes['select-card-shop-name']}>{`${shop.name}: `}</span>
                <span className={classes['font-weight']}>{count === 0 ? 'Нет' : count}</span>
              </div>
            ))}
            <span style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
              <a href="https://vk.com/vapestav">
                <Button color="success">Заказать</Button>
              </a>
              <Link to="/">
                <Button color="error">Вернуться</Button>
              </Link>
            </span>
          </div>
        </Container>
      </div>
    )
  );
};

export default SelectCardPage;
