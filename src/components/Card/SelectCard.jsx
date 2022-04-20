import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../Container/Container';

const SelectCard = () => {
  let { card } = useParams();
  console.log(card);
  const { filterData } = useSelector(({ data }) => data);
  console.log(filterData[card]);
  const value = filterData[card];

  return (
    <>
      <div className="product-item-select">
        <div>{value.name}</div>
        <div>{value.price}</div>
        <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
        <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
        <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
      </div>
    </>
  );
};

export default SelectCard;
