import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { setCurrentPage } from '../../../redux/fullData/dataActions';
import Container from '../../Container/Container';

const Pagination = () => {
  const dispatch = useDispatch();
  const { filterData } = useSelector(({ data }) => data);
  let pages = [];
  const pagesNumber = filterData && Math.ceil(filterData.length / 10);

  for (let i = 0; i < pagesNumber - 1; i++) {
    pages.push(i);
  }

  const onPageNumberClick = id => {
    dispatch(setCurrentPage(id + 1));
  };

  return (
    filterData.length > 10 && (
      <div className="pages-block">
        <Container>
          <div className="pages">
            {pages.map(id => (
              <div onClick={() => onPageNumberClick(id)} key={id} className="Page">
                {id + 1}
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  );
};

export default Pagination;