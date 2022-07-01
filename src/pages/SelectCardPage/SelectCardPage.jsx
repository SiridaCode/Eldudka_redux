import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '../../components/Container/Container';
import MainPage from '../../components/MainPage/MainPage';
import { setBreadcrumbs } from '../../redux/data/dataActions';
import classes from './SelectCardPage.module.scss';

const SelectCardPage = () => {
  let { card } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const numberCard = Number(card);
  const { filterData, currentPage } = useSelector(({ data }) => data);
  const value = filterData.slice(currentPage * 10, (currentPage + 1) * 10)[numberCard];

  if (!value) {
    history.push('/');
    dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]));
    return MainPage;
  }
  const [eng, rus] = value.name.split('(');

  return (
    <div className={classes['cards-wrapper']}>
      <Container>
        <div className={classes['product-item-select']}>
          <div className={classes['select-card-name']}>{eng + ' ' + rus}</div>
          <div className={classes['product-item-image']}>
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
          <div className={classes['select-card-description']}>
            {value.description ? value.description : 'Нет описания'}
          </div>
          <div className={classes['value-price-container']}>
            {`Цена: `}
            <span className={classes['font-weight']}>{`${value.price} ₽`}</span>
          </div>
          {value.availability.map(({ shop, count }) => (
            <div className={classes['bottom-container']} key={shop.id}>
              <span className={classes['select-card-shop-name']}>{`${shop.name}: `}</span>
              <span className={classes['font-weight']}>{count === 0 ? 'Нет' : count}</span>
            </div>
          ))}
          <span style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <a href="https://vk.com/vapestav">
              <Button color="success">Заказать</Button>
            </a>
            <Link onClick={() => dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]))} to="/">
              <Button color="error">Вернуться</Button>
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardPage;
