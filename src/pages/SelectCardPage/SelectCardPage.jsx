import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from 'mui-button';
import './styles.css';
import MainPage from '../../components/MainPage/MainPage';
import { Link } from 'react-router-dom';

const SelectCardPage = () => {
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
          <img
            src={value.pic ? value.pic : '../image-card.png'}
            className="product-item-image-text"
            alt="Нет картинки"
          />
          <div>{'(' + rus}</div>
          <div>{value.description ?? 'Нет описания'}</div>
          <div>{`Цена ${value.price} ₽`}</div>
          {/* {value.map((item, index) => (
            <div>{`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}</div>
          ))} */}
          <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
          <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
          <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
          <a href="https://vk.com/vapestav" className="to-order">
            <span style={{ display: 'flex', justifyContent: 'space-around', width: '400px' }}>
              <Button color="success" variant="outlined">
                Заказать
                <a href="https://vk.com/vapestav" className="to-order"></a>
              </Button>
              <Link to="/">
                <Button color="error" variant="outlined">
                  Вернуться
                </Button>
              </Link>
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardPage;
