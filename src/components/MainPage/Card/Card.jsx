import * as React from 'react';
import './styles.css';
import Battery from '../Battery/Battery';
import { Link } from 'react-router-dom';

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
        {/* {data.availability.map((item, index) => {
          <div className="product-item-availability">
            <div className="shop-name">
              {`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}
            </div>
            <div className="battery-wrapper">
              <Battery item={item.count} />
            </div>
          </div>;
        })} */}
        <div className="product-item-availability">
          <div className="shop-name">{'Галерея: ' + data.availability.galery ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery item={data.availability.galery} />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Тухачевского: ' + data.availability.tuhach ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery item={data.availability.tuhach} />
          </div>
        </div>

        <div className="product-item-availability">
          <div className="shop-name">{'Шоколад: ' + data.availability.shokolad ?? 'Нет'}</div>
          <div className="battery-wrapper">
            <Battery item={data.availability.shokolad} />
          </div>
        </div>

        <p className="product-item-price">{data.price + ' ₽'}</p>
      </div>
    </Link>
  );
};

export default Card;
