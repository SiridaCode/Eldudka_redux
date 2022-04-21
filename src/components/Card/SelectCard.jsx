import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setFullData } from '../../redux/fullData/dataActions';
import Container from '../Container/Container';
import './styles.css';

const SelectCard = () => {
  let { card } = useParams();
  const { filterData, currentPage } = useSelector(({ data }) => data);
  const numberCard = Number(card);
  const value = filterData[numberCard];
  const [eng, rus] = value.name.split('(');
  console.log(numberCard);

  return (
    <>
      <div className="product-item-select">
        <div>{eng}</div>
        <div>{'(' + rus}</div>
        <div>{value.price + ' ₽'}</div>
        <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
        <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
        <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
        <div className="to-order">Заказать</div>
      </div>
    </>
  );
};

export default SelectCard;
