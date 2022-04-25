import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.css';

const SelectCard = () => {
  let { card } = useParams();
  const { filterData, currentPage } = useSelector(({ data }) => data);
  const numberCard = Number(card);
  const value = filterData.slice(currentPage * 10, (currentPage + 1) * 10)[numberCard];
  const [eng, rus] = value.name.split('(');

  return (
    <>
      <div className="product-item-select">
        <div>{eng}</div>
        <div>{'(' + rus}</div>
        <div>{value.price + ' ₽'}</div>
        <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
        <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
        <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
        <a href="https://vk.com/vapestav" className="to-order">
          Заказать
        </a>
      </div>
    </>
  );
};

export default SelectCard;
