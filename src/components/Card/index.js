import * as React from 'react';
import Battery from "../Battery";
import './styles.css'

const Card = ({ data, id }) => {

    const nameCard = data.name.split('(');
    const nameCardNoBracket = nameCard[0];
    const [showDescription, setShowDescription] = React.useState(false);

    const onClickDescriptionShow = () => (description) => {
        setShowDescription(!showDescription);
    }

    return (
        <div className="product-item">
            <div className="product-item-main-info">
                <button className='button-description' onClick={onClickDescriptionShow(data.description)}>Описание товара</button>
                {showDescription && <div className='show-description'>{data.description}</div>}
                <p id="product-name" className="product-item-name">{nameCardNoBracket}</p>
                <div className="product-item-image">
                    <img src={data.pic} className="product-item-image-text"></img>
                </div>

                <div className="product-item-availability" id="product-item-availability-galery">
                    <div>Галерея: </div>
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
