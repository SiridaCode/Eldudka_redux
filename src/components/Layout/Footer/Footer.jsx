import * as React from 'react';
import classes from './Footer.module.scss';
import useWindowResize from '../../../hooks/UseWindowResize';

const Footer = () => {
  const { width } = useWindowResize();
  console.log(width);
  const FooterMobile = () => {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.elementContainer}>
          <img width="13" height="13" src="../tg_icon.png" />
          <img style={{ marginLeft: '20px' }} width="13" height="13" src="../inst_icon.png" />
        </div>
        <div className={classes.logo}>
          <img className={classes.logo} src="../logo.png" />
        </div>
        <div className={classes.elementContainer}>
          <img width="13" height="13" src="../vk_icon.png" />
          <img style={{ marginLeft: '20px' }} width="13" height="13" src="../telephone.png" />
        </div>
      </div>
    );
  };

  const FooterClassic = () => {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.elementContainer}>
          <img className={classes.telephoneIcon} src="../telephone.png" />
          <div className={classes.telephone}>8(962) 010 05-77</div>
        </div>
        <div className={classes.elementContainer}>
          <img className={classes.logo} src="../logo.png" />
        </div>
        <div className={classes.elementContainer}>
          <img className={classes.locationIcon} src="../location.png" />
          <div className={classes.locationText}>Наши магазины</div>
        </div>
      </div>
    );
  };

  return width > 860 ? <FooterClassic /> : <FooterMobile />;
};

export default Footer;
