import React from 'react';
import Button from 'mui-button';
import MainPage from '../../components/MainPage/MainPage';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import './styles.css';

const ContactPage = () => {
  const src = [
    { href: 'https://vk.com/vapestav', src: './icon-vk.png' },
    { href: 'https://instagram.com/eldudka_vapeshop?igshid=YmMyMTA2M2Y=', src: './icon-inst.png' },
    { href: 'https://t.me/eldudka', src: './icon-telegram.png' },
  ];

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
          <div>
            <span>ЖК ШОКОЛАД</span>
            <br /> Крупской 29
            <br /> 10:30 - 20:00
          </div>
          <div>
            <span>Макарова 22 1 этаж</span>
            <br /> 11:00-20:00
          </div>
          <div className="icon-container">
            {src.map(({ href, src }) => (
              <a href={href}>
                <img className="icon" src={src} alt="no image" />
              </a>
            ))}
          </div>
          <Link to="/">
            <Button color="error" variant="outlined">
              Вернуться
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
