import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../Container/Container';
import './styles.css';

const SelectCard = () => {
  let { card } = useParams();
  const { filterData, currentPage } = useSelector(({ data }) => data);
  const numberCard = Number(card);
  const value = filterData.slice(currentPage * 10, (currentPage + 1) * 10)[numberCard];
  const [eng, rus] = value.name.split('(');

  return (
    <div className="cards-wrapper">
      <Container>
        <div className="product-item-select">
          <div>{eng}</div>
          <div>{'(' + rus}</div>
          <div>{value.price + ' ₽'}</div>
          <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
          <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
          <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
          <img
            src={value.pic ? value.pic : '../image-card.png'}
            className="product-item-image-text"
          />
          <a href="https://vk.com/vapestav" className="to-order">
            Заказать
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SelectCard;
