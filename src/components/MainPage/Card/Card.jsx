import * as React from 'react';
import Battery from '../Battery/Battery';
import { Link } from 'react-router-dom';
import eldudkaIcon from '../../../image/eldudka-icon.png';
import classes from './Card.module.scss';

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');

  return (
    <Link to={`/${data.uuid}`} className={classes['product-item']}>
      <div className={classes['product-item-main-info']}>
        <div className={classes['product-item-name']}>{eng}</div>
        <div className={classes['product-item-image']}>
          {data.images.length > 0 ? (
            <img
              src={data.images[0]}
              className={classes['product-item-image-select']}
              alt="Нет картинки"
            />
          ) : (
            <img
              src={eldudkaIcon}
              className={classes['product-item-image-none']}
              alt="Нет картинки"
            />
          )}
        </div>
        {data.availability.map((item, index) => (
          <div key={index} className={classes['product-item-availability']}>
            <div className={classes['shop-name']}>
              {`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}
            </div>
            <div className={classes['battery-wrapper']}>
              <Battery item={item.count} />
            </div>
          </div>
        ))}
        <p className={classes['product-item-price']}>{data.price + ' ₽'}</p>
      </div>
    </Link>
  );
};

export default Card;
