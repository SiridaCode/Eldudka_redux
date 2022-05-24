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
  console.log(value);
  return (
    <div className="cards-wrapper">
      <Container>
        <div className="product-item-select">
          <div>{eng + ' ' + rus}</div>
          <div className="product-item-image-div">
            <img
              src={value.images ? value.images : '../image-card.png'}
              className="product-item-image-select"
              alt="Нет картинки"
            />
          </div>
          <div>{value.description ?? 'Нет описания'}</div>
          <div>{`Цена ${value.price} ₽`}</div>
          {value.availability.map(({ shop, count }) => (
            <div key={shop.id}>{`${shop.name}: ` + (count === 0 ? 'Нет' : count)}</div>
          ))}
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
