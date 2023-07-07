import Container from '../../Container/Container';
import React from 'react';
import classes from './Banner.module.scss';

const Banner = () => {
  return (
    <Container>
      <div className={classes.bannerConteiner}>
        <img src="../banner.png" />
      </div>
    </Container>
  );
};

export default Banner;
