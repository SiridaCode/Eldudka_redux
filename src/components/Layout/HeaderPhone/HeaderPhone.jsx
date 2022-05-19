import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../../redux/data/dataActions';
import Container from '../../Container/Container';
import { src } from '../../../utils/utils';
import './styles.css';

const HeaderPhone = () => {
  const dispatch = useDispatch();
  const breadHandler = () => {
    dispatch(
      setBreadcrumbs([
        { name: 'Главная', href: '/' },
        { name: 'Контакты', href: '/contacts' },
      ])
    );
  };

  return (
    <header className="header-first">
      <Container>
        <div className="header-first-wrapper">
          <div className="logo-mobile">
            <img width={100} src="./logo.png" alt="logo" />
          </div>
          <div className="header-icon-container">
            {src.map(({ href, mainSrc }) => (
              <a href={href}>
                <img className="main-icon" src={mainSrc} alt="icon" />
              </a>
            ))}
            <a className="call" href="tel:+79620100577">
              8 (962) 010 05-77
            </a>
          </div>
          <Link onClick={breadHandler} className="contacts-link" to="/contacts">
            Контакты
          </Link>
        </div>
      </Container>
    </header>
  );
};
export default HeaderPhone;
