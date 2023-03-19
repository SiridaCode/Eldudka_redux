import * as React from 'react';
import Battery from '../Battery/Battery';
import { Link } from 'react-router-dom';
import eldudkaIcon from '../../../image/eldudka-icon.png';
import classes from './Card.module.scss';
import useWindowSize from '../../../hooks/UseWindowResize';

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');
  const { width } = useWindowSize();
  return (
    <Link to={`/${data.uuid}`} className={classes['product-item']}>
      <div className={classes['product-item-main-info']}>
        <div className={classes['product-item-image']}>
          {data.images.length > 0 ? (
            <img
              width={width < 860 && '155'}
              height={width < 860 && '204'}
              src={data.images[0]}
              className={classes['product-item-image-select']}
              alt="Нет картинки"
            />
          ) : (
            <img
              width={width < 860 && '155'}
              height={width < 860 && '204'}
              src={eldudkaIcon}
              className={classes['product-item-image-none']}
              alt="Нет картинки"
            />
          )}
        </div>
        <p className={classes['product-item-price']}>{data.price + ' ₽'}</p>
        <div className={classes['product-item-name']}>{eng}</div>
      </div>
    </Link>
  );
};

export default Card;
