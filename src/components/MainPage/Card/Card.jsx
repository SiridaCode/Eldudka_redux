import * as React from 'react';
import Battery from '../Battery/Battery';
import './styles.css';
import { Link } from 'react-router-dom';
import { colors } from '../../../utils/utils';

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');
  return (
    <Link to={`card${id}`} replace key={id} className="product-item">
      <div className="product-item-main-info">
        <div className="product-item-name">{eng}</div>
        <div className="product-item-image">
          <img
            src={data.pic ? data.pic : '../image-card.png'}
            className="product-item-image-text"
          ></img>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Галерея: ' + data.availability.galery ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery colors={colors(data.availability.galery)} />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Тухачевского: ' + data.availability.tuhach ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery colors={colors(data.availability.tuhach)} />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Шоколад: ' + data.availability.shokolad ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery colors={colors(data.availability.shokolad)} />
          </div>
        </div>

        <p className="product-item-price">{data.price + ' ₽'}</p>
      </div>
    </Link>
  );
};

export default Card;
