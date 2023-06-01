import * as React from 'react';
import { Link } from 'react-router-dom';
import eldudkaIcon from '../../../image/eldudka-icon.png';
import classes from './Card.module.scss';

const Card = ({ data }) => {
  const [eng] = data.name.split('(');

  return (
    <Link to={`/${data.uuid}`} className={classes['product-item']}>
      <div
        style={{
          background: `center / cover url(${
            data.images.length > 0 ? data.images[0] : eldudkaIcon
          })`,
        }}
        className={classes['product-item-image']}
      ></div>
      <p className={classes['product-item-price']}>{data.price + ' ₽'}</p>
      <div className={classes['product-item-name']}>{eng}</div>
    </Link>
  );
};

export default Card;
