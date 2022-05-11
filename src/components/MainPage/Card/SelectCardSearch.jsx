import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../Container/Container';
import Button from 'mui-button';
import MainPage from '../MainPage';

const SelectCardSearch = () => {
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
          <Button color="success" variant="outlined">
            Заказать
            <a href="https://vk.com/vapestav" className="to-order"></a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardSearch;
