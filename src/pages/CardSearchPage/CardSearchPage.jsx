import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from '@mui/material/Button';
import MainPage from '../../components/MainPage/MainPage';
import { Link } from 'react-router-dom';
import classes from './CardSearchPage.module.scss';

const CardSearchPage = () => {
  let { search } = useParams();
  const { searchData } = useSelector(({ data }) => data);
  const value = searchData[search];
  let history = useHistory();

  if (!value) {
    history.push('/');
    return MainPage;
  }
  const [eng, rus] = value.name.split('(');

  return (
    <div className={classes['cards-wrapper']}>
      <Container>
        <div className={classes['product-item-select']}>
          <div>{eng + ' ' + rus}</div>
          <div className={classes['product-item-image-div']}>
            {value.images.length > 0 ? (
              <img
                src={value.images[0]}
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
          <div>{value.description ? value.description : 'Нет описания'}</div>
          <div>
            {`Цена: `}
            <span className={classes['font-weight']}>{`${value.price} ₽`}</span>
          </div>
          {value.availability.map(({ shop, count }) => (
            <div key={shop.id}>
              {`${shop.name}: `}
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
  );
};

export default CardSearchPage;
