import React from 'react';
import Button from '@mui/material/Button';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import './styles.css';
import { src } from '../../utils/utils';
import SimpleAccordion from './Accordion';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../redux/data/dataActions';

const ContactPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="cards-wrapper">
      <Container>
        <div className="contacts-container">
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
          {/* <SimpleAccordion /> */}
          <div className="icon-container">
            {src.map(({ href, src }) => (
              <a href={href}>
                <img className="icon" src={src} alt="icon" />
              </a>
            ))}
          </div>
          <Link onClick={() => dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]))} to="/">
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
