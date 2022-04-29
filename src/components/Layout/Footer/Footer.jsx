import * as React from 'react';
import Container from '../../Container/Container';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <a className="call" href="tel:+79620100577">
            8 (962) 010 05-77
          </a>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
