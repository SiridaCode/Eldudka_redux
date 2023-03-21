import * as React from 'react';
import classes from './Footer.module.scss';
import useWindowResize from '../../../hooks/UseWindowResize';
import { CONTACT_PHONE_NUMBER, SOCIAL_MEDIA } from '../../../utils/constants';

const Footer = () => {
  const { width } = useWindowResize();

  const FooterMobile = () => {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.elementContainer}>
          <a href={SOCIAL_MEDIA.telegram.href}>
            <img width="13" height="13" src="../tg_icon.png" />
          </a>
          <a href={SOCIAL_MEDIA.instagram.href}>
            <img style={{ marginLeft: '20px' }} width="13" height="13" src="../inst_icon.png" />
          </a>
        </div>
        <div className={classes.logo}>
          <img className={classes.logo} src="../logo.png" />
        </div>
        <div className={classes.elementContainer}>
          <a href={SOCIAL_MEDIA.vk.href}>
            <img width="13" height="13" src="../vk_icon.png" />
          </a>
          <a href={`tel:+${CONTACT_PHONE_NUMBER.value}`}>
            <img style={{ marginLeft: '20px' }} width="13" height="13" src="../telephone.png" />
          </a>
        </div>
      </div>
    );
  };

  const FooterClassic = () => {
    return (
      <div className={classes.footerContainer}>
        <a href={`tel:+${CONTACT_PHONE_NUMBER.value}`}>
          <div className={classes.elementContainer}>
            <img className={classes.telephoneIcon} src="../telephone.png" />
            <div className={classes.telephone}>{CONTACT_PHONE_NUMBER.text}</div>
          </div>
        </a>
        <a href="/">
          <div className={classes.elementContainer}>
            <img className={classes.logo} src="../logo.png" />
          </div>
        </a>
        <div className={classes.elementContainer}>
          {/* <img className={classes.locationIcon} src="../location.png" />
          <div className={classes.locationText}>Наши магазины</div> */}
        </div>
      </div>
    );
  };

  return width > 860 ? <FooterClassic /> : <FooterMobile />;
};

export default Footer;
