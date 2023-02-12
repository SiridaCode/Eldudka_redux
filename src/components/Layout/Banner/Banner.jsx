import Container from '../../Container/Container'
import React from 'react';
import classes from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <Container>
      <div className={classes.bannerConteiner}>
        <img height='453' src="../banner.png" alt="banner" />
      </div>
      </Container>
    </div>
  );
};

export default Banner;
