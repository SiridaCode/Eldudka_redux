import * as React from 'react';
import Battery from '../Battery/Battery';
import './styles.css';
import { Link } from 'react-router-dom';

const colors = shop => {
  return shop < 1
    ? []
    : shop >= 1 && shop <= 3
    ? ['#BD1616']
    : shop >= 4 && shop <= 5
    ? ['#BD8E16', '#BD8E16']
    : shop >= 6 && shop <= 9
    ? ['#9CBD16', '#9CBD16', '#9CBD16']
    : ['#23BD16', '#23BD16', '#23BD16', '#23BD16'];
};

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');
  return (
    <div key={id} className="product-item">
      <div className="product-item-main-info">
        <Link className="product-item-name" to={`card${id}`} replace>
          {eng}
        </Link>
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
    </div>
  );
};

export default Card;
