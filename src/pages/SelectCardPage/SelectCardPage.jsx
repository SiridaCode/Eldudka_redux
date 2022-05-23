import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '../../components/Container/Container';
import MainPage from '../../components/MainPage/MainPage';
import { setBreadcrumbs } from '../../redux/data/dataActions';

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
              <Button color="success">
                Заказать
                <a href="https://vk.com/vapestav" className="to-order"></a>
              </Button>
              <Link
                onClick={() => dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]))}
                to="/"
              >
                <Button color="error">Вернуться</Button>
              </Link>
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardPage;
