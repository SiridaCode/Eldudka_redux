import * as React from 'react';
import Battery from "./Battery";
const Card = ({ data, id }) => {
    return (
        <div className="product-item">
            <div className="product-item-main-info">
                <p id="product-name" className="product-item-name">{data.name}</p>
                <div className="product-item-image">
                    <div className="product-item-image-text">EL'DUDKA</div>
                </div>

                <div className="product-item-availability" id="product-item-availability-galery">
                    <div>Галерея:</div>
                    <div className="battery-galery">
                        <Battery productValue={data.availability && data.availability.galery} />
                    </div>
                    <div className="availability">{data.availability && data.availability.galery ? data.availability.galery : "Нет"}</div>
                </div>

                <div className="product-item-availability" id="product-item-availability-tuhach">
                    <div>Тухачевского: </div>
                    <div className="battery-tuhach">
                        <Battery productValue={data.availability && data.availability.tuhach} />
                    </div>
                    <div className="availability">{data.availability && data.availability.tuhach ? data.availability.tuhach : "Нет"}</div>
                </div>

                <div className="product-item-availability" id="product-item-availability-kulakova">
                    <div>Кулакова: </div>
                    <div className="battery-kulakova">
                        <Battery productValue={data.availability && data.availability.kulakova} />
                    </div>
                    <div className="availability">{data.availability && data.availability.kulakova ? data.availability.kulakova : "Нет"}</div>
                </div>

                <div className="product-item-availability" id="product-item-availability-shokolad">
                    <div>Шоколад: </div>
                    <div className="battery-shokolad">
                        <Battery productValue={data.availability && data.availability.shokolad} />
                    </div>
                    <div className="availability">{data.availability && data.availability.shokolad ? data.availability.shokolad : "Нет"}</div>
                </div>

                <p className="product-item-price">{data.price + " ₽"}</p>
            </div>
        </div>
    )
}

export default Card;