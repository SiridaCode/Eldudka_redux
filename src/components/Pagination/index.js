import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { setCurrentPage } from '../../redux/fullData/dataActions';

const Pagination = () => {
  const dispatch = useDispatch();
  const { filterData } = useSelector(({ data }) => data);
  let pages = [];
  const pagesNumber = filterData && Math.ceil(filterData.length / 10);

  for (let i = 0; i < pagesNumber; i++) {
    pages.push(i);
  }

  const onPageNumberClick = id => {
    dispatch(setCurrentPage(id));
  };

  return (
    <div className="Pages">
      {pages.map(id => (
        <div onClick={() => onPageNumberClick(id)} key={id} className="Page">
          {id + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
