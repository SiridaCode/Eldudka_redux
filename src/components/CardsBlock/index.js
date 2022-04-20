import * as React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Container from '../Container/Container';
import './styles.css';

const CardsBlock = () => {
  const { filterData, currentPage } = useSelector(({ data }) => data);
  return (
    <div className="cards-block">
      <Container>
        <div className="cards-wrapper">
          {filterData &&
            filterData
              .slice(currentPage * 10, (currentPage + 1) * 10)
              .map((item, index) => <Card data={item} key={index} />)}
        </div>
      </Container>
    </div>
  );
};

export default CardsBlock;
