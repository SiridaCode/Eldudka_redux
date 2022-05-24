import * as React from 'react';
import './styles.css';
import Battery from '../Battery/Battery';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../../../redux/data/dataActions';

const Card = ({ data, id }) => {
  const [eng, rus] = data.name.split('(');
  const dispatch = useDispatch();
  const breadHandler = href => {
    dispatch(
      setBreadcrumbs([
        { name: 'Главная', href: '/' },
        { name: 'Карточка товара', href: href },
      ])
    );
  };
  return (
    <Link
      onClick={() => breadHandler(`/card${id}`)}
      to={`card${id}`}
      replace
      key={id}
      className="product-item"
    >
      <div className="product-item-main-info">
        <div className="product-item-name">{eng}</div>
        <div className="product-item-image">
          <img
            src={data.images ? data.images : '../image-card.png'}
            className="product-item-image-text"
            alt="картинка"
          />
        </div>
        {data.availability.map((item, index) => (
          <div key={index} className="product-item-availability">
            <div className="shop-name">
              {`${item.shop.name}: ` + (item.count === 0 ? 'Нет' : item.count)}
            </div>
            <div className="battery-wrapper">
              <Battery item={item.count} />
            </div>
          </div>
        ))}
        <p className="product-item-price">{data.price + ' ₽'}</p>
      </div>
    </Link>
  );
};

export default Card;
