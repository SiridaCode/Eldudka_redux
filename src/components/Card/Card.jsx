import * as React from 'react';
import Battery from '../Battery/Battery';
import './styles.css';
import { Link } from 'react-router-dom';

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');
  return (
    <div className="product-item">
      <div className="product-item-main-info">
        <Link className="product-item-name" to={`card/${id}`} replace>
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
            <Battery
              colors={
                data.availability.galery < 1
                  ? []
                  : data.availability.galery >= 1 && data.availability.galery <= 3
                  ? ['#BD1616']
                  : data.availability.galery >= 4 && data.availability.galery <= 5
                  ? ['#BD8E16', '#BD8E16']
                  : data.availability.galery >= 6 && data.availability.galery <= 9
                  ? ['#9CBD16', '#9CBD16', '#9CBD16']
                  : ['#23BD16', '#23BD16', '#23BD16', '#23BD16']
              }
            />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Тухачевского: ' + data.availability.tuhach ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery
              colors={
                data.availability.tuhach < 1
                  ? []
                  : data.availability.tuhach >= 1 && data.availability.tuhach <= 3
                  ? ['#BD1616']
                  : data.availability.tuhach >= 4 && data.availability.tuhach <= 5
                  ? ['#BD8E16', '#BD8E16']
                  : data.availability.tuhach >= 6 && data.availability.tuhach <= 9
                  ? ['#9CBD16', '#9CBD16', '#9CBD16']
                  : ['#23BD16', '#23BD16', '#23BD16', '#23BD16']
              }
            />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Шоколад: ' + data.availability.shokolad ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery
              colors={
                data.availability.shokolad < 1
                  ? []
                  : data.availability.shokolad >= 1 && data.availability.shokolad <= 3
                  ? ['#BD1616']
                  : data.availability.shokolad >= 4 && data.availability.shokolad <= 5
                  ? ['#BD8E16', '#BD8E16']
                  : data.availability.shokolad >= 6 && data.availability.shokolad <= 9
                  ? ['#9CBD16', '#9CBD16', '#9CBD16']
                  : ['#23BD16', '#23BD16', '#23BD16', '#23BD16']
              }
            />
          </div>
        </div>

        <p className="product-item-price">{data.price + ' ₽'}</p>
      </div>
    </div>
  );
};

export default Card;
