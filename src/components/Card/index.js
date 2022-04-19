import * as React from 'react';
import Battery from '../Battery';
import './styles.css';

const Card = ({ data, id }) => {
  const nameCard = data.name.split('(');
  const nameCardNoBracket = nameCard[0];

  return (
    <div className="product-item">
      <div className="product-item-main-info">
        <p id="product-name" className="product-item-name">
          {nameCardNoBracket}
        </p>
        <div className="product-item-image">
          <img src="../image-card.png" className="product-item-image-text"></img>
        </div>

        <div className="product-item-availability">
          <div>Галерея</div>
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
          {/* <div className="availability">
            {data.availability && data.availability.galery ? data.availability.galery : 'Нет'}
          </div> */}
        </div>

        <div className="product-item-availability">
          <div>Тухачевского</div>
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
          {/* <div className="availability">
            {data.availability && data.availability.tuhach ? data.availability.tuhach : 'Нет'}
          </div> */}
        </div>

        <div className="product-item-availability">
          <div>Кулакова</div>
          <div className="battery-wrapper">
            <Battery
              colors={
                data.availability.kulakova < 1
                  ? []
                  : data.availability.kulakova >= 1 && data.availability.kulakova <= 3
                  ? ['#BD1616']
                  : data.availability.kulakova >= 4 && data.availability.kulakova <= 5
                  ? ['#BD8E16', '#BD8E16']
                  : data.availability.kulakova >= 6 && data.availability.kulakova <= 9
                  ? ['#9CBD16', '#9CBD16', '#9CBD16']
                  : ['#23BD16', '#23BD16', '#23BD16', '#23BD16']
              }
            />
          </div>
          {/* <div className="availability">
            {data.availability && data.availability.kulakova ? data.availability.kulakova : 'Нет'}
          </div> */}
        </div>

        <div className="product-item-availability">
          <div>Шоколад</div>
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
          {/* <div className="availability">
            {data.availability && data.availability.shokolad ? data.availability.shokolad : 'Нет'}
          </div> */}
        </div>

        <p className="product-item-price">{data.price + ' ₽'}</p>
      </div>
    </div>
  );
};

export default Card;
