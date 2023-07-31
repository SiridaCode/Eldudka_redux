import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.scss';

const Card = ({ data }) => {
  const [eng] = data.name.split('(');

  return (
    <Link to={`/${data.uuid}`} className={classes['product-item']}>
      <div
        style={data.images.length > 0 ? {
          background: `center / cover url(${data.images[0]})`,
        } : {
          backgroundImage: `url(../logo.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: `contain`,
          opacity: `50%`
        }}
        className={classes['product-item-image']}
      ></div>
      <p className={classes['product-item-price']}>{data.price + ' ₽'}</p>
      <div className={classes['product-item-name']}>{eng}</div>
    </Link>
  );
};

export default Card;
