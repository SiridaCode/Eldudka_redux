import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from '@mui/material/Button';
import MainPage from '../../components/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { setBreadcrumbs } from '../../redux/data/dataActions';

const CardSearchPage = () => {
  let { search } = useParams();
  const dispatch = useDispatch();
  const { searchData } = useSelector(({ data }) => data);
  const value = searchData[search];
  let history = useHistory();

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
          <span style={{ display: 'flex', justifyContent: 'space-around', width: '400px' }}>
            <Button color="success">
              Заказать
              <a href="https://vk.com/vapestav" className="to-order"></a>
            </Button>
            <Link onClick={() => dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]))} to="/">
              <Button color="error">Вернуться</Button>
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default CardSearchPage;
