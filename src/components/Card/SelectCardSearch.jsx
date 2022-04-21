import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../Container/Container';

const SelectCardSearch = () => {
  let { search } = useParams();
  console.log(search);
  const { searchData } = useSelector(({ data }) => data);
  console.log(searchData);
  const value = searchData[search];
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
        <div className="to-order">Заказать</div>
      </div>
    </>
  );
};

export default SelectCardSearch;
