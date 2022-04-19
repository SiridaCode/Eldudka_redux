import * as React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import './styles.css';

const Container = () => {
  const { filterData, currentPage } = useSelector(({ data }) => data);
  return (
    <div className="wrapper">
      <div className="container">
        {filterData &&
          filterData
            .slice(currentPage * 10, (currentPage + 1) * 10)
            .map((item, index) => <Card data={item} key={index} />)}
      </div>
    </div>
  );
};
export default Container;
