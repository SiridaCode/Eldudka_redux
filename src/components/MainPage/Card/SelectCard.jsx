import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../Container/Container';
import Button from 'mui-button';
import './styles.css';
import MainPage from '../MainPage';

const SelectCard = () => {
  let { card } = useParams();
  let history = useHistory();
  const numberCard = Number(card);
  const { filterData, currentPage } = useSelector(({ data }) => data);
  const value = filterData.slice(currentPage * 10, (currentPage + 1) * 10)[numberCard];

  if (!value) {
    history.push('/');
    return MainPage;
  }
  const [eng, rus] = value.name.split('(');

  return (
    <div className="cards-wrapper">
      <Container>
        <div className="product-item-select">
          <div>{eng}</div>
          <div>{'(' + rus}</div>
          <div>{value.description ?? 'Нет описания'}</div>
          <div>{`Цена ${value.price} ₽`}</div>
          {/* {value.map((item, index) => (
            <div>{`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}</div>
          ))} */}
          <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
          <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
          <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
          <img
            src={value.pic ? value.pic : '../image-card.png'}
            className="product-item-image-text"
            alt="Нет картинки"
          />
          <a href="https://vk.com/vapestav" className="to-order">
            <Button color="error" variant="outlined">
              Заказать
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SelectCard;
