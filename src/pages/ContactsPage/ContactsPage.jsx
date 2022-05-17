import React from 'react';
import Button from 'mui-button';
import MainPage from '../../components/MainPage/MainPage';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import './styles.css';

const ContactPage = () => {
  return (
    <div className="cards-wrapper">
      <Container>
        <div className="product-item-select-contacts">
          <div className="header-contacts">Режим работы:</div>
          <div>
            <span>ТЦ Галерея 2 этаж</span>
            <br /> ул.Маршала Жукова 8<br /> 10:30 - 20:30
          </div>
          <div>
            <span>ул.Тухачевского 19/3</span>
            <br /> 10:00 - 22:00
          </div>
          <div>
            <span>Гипермаркет Закрома цоколь</span>
            <br /> Серова 468/5
            <br /> 10:00 - 20:00
          </div>
          {/* {value.map((item, index) => (
          <div>{`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}</div>
        ))} */}
          <div>
            <span>ЖК ШОКОЛАД</span>
            <br /> Крупской 29
            <br /> 10:30 - 20:00
          </div>
          <div>
            <span>Макарова 22 1 этаж</span>
            <br /> 11:00-20:00
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
            <a href="https://vk.com/vapestav">
              <img className="icon" src="./icon-vk.png" alt="no image" />
            </a>
            <img className="icon" src="./icon-inst.png" alt="no image" />
            <img className="icon" src="./icon-telegram.png" alt="no image" />
          </div>
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
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
