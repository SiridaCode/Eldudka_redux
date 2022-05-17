import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './styles.css';

const HeaderPhone = () => {
  return (
    <header className="header-first">
      <Container>
        <div className="header-first-wrapper">
          <div className="logo-mobile">
            <img width={100} src="./logo.png" alt="no image" />
          </div>
          <a className="call" href="tel:+79620100577">
            8 (962) 010 05-77
          </a>
          <Link className="contacts-link" to="/contacts">
            Контакты
          </Link>
        </div>
      </Container>
    </header>
  );
};
export default HeaderPhone;
