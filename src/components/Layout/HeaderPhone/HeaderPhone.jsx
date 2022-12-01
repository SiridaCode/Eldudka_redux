import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import { src } from '../../../utils/utils';
import classes from './HeaderPhone.module.scss';

const HeaderPhone = () => {
  return (
    <header className={classes.headerFirst}>
      <Container>
        <div className={classes.headerFirstWrapper}>
          <div className={classes.headerIconContainer}>
            {src.map(({ href, mainSrc }, index) => (
              <a key={index} href={href}>
                <img className={classes.mainIcon} src={mainSrc} alt="icon" />
              </a>
            ))}
            <a className={classes.call} href="tel:+79620100577">
              8 (962) 010 05-77
            </a>
          </div>
          <Link className={classes.contactsLink} to="/contacts">
            Контакты
          </Link>
        </div>
      </Container>
    </header>
  );
};
export default HeaderPhone;
