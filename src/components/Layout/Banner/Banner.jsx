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
      <div className={classes.benefitsContainer}>
      <div className={classes.benefitsContainer}>
        <img src='../benefits1.png' />
        <div className={classes.benefitsText}>Профессиональная консультация</div>
      </div>
      <div className={classes.benefitsContainer}>
        <img src='../benefits2.png' />
        <div className={classes.benefitsText}>Только оригинал</div>
      </div>
      <div className={classes.benefitsContainer}>
        <img src='../benefits3.png' />
        <div className={classes.benefitsText}>Ремонт девайсов</div>
      </div>
      <div className={classes.benefitsContainer}>
        <img src='../benefits4.png' />
        <div className={classes.benefitsText}>Система лояльности</div>
      </div>
      </div>
      </Container>
    </div>
  );
};

export default Banner;
