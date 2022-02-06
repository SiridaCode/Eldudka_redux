import * as React from "react";
import Card from "../Card";
import Wrapper from "../Container";
import './styles.css'

const CardsBlock = ({ currentPage, currentData, setCurrentData, fullData }) => {

    return (
        <div className="cards-block">
            <Wrapper>
                <div className="cards-wrapper">
                    {currentData && currentData.slice(currentPage * 10, (currentPage + 1) * 10).map((item, index) => <Card data={item} key={index} />)}
                </div>
            </Wrapper>
        </div>

    )
}
export default CardsBlock;

