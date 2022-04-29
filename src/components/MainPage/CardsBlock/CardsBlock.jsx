import * as React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Container from '../../Container/Container';
import './styles.css';

const CardsBlock = () => {
  const { filterData, currentPage } = useSelector(({ data }) => data);
  return (
    <div className="cards-block">
      <Container>
        <div className="cards-wrapper">
          {filterData.length > 1 ? (
            filterData
              .slice(currentPage * 10, (currentPage + 1) * 10)
              .map((item, index) => <Card data={item} key={index} id={index} />)
          ) : (
            <div className="lds-dual-ring"></div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CardsBlock;
