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
          <div>{eng + ' ' + rus}</div>
          <div className="product-item-image-div">
            {value.images.length > 0 ? (
              <img src={value.images[0]} className="product-item-image-select" alt="Нет картинки" />
            ) : (
              <img src={'Нет картинки'} className="product-item-image-none" alt="Нет картинки" />
            )}
          </div>
          <div>{value.description ? value.description : 'Нет описания'}</div>
          <div>
            {`Цена: `}
            <span className="font-weight">{`${value.price} ₽`}</span>
          </div>
          {value.availability.map(({ shop, count }) => (
            <div key={shop.id}>
              {`${shop.name}: `}
              <span className="font-weight">{count === 0 ? 'Нет' : count}</span>
            </div>
          ))}
            <span style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <a href="https://vk.com/vapestav">
              <Button color="success">
                Заказать
              </Button>
              </a>
              <Link
                onClick={() => dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]))}
                to="/"
              >
                <Button color="error">Вернуться</Button>
              </Link>
            </span>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardPage;
