import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Pagination.module.scss';
import { setCurrentPage } from '../../../redux/data/dataActions';
import Container from '../../Container/Container';

const Pagination = () => {
  const dispatch = useDispatch();
  const { filterData } = useSelector(({ data }) => data);
  const pagesNumber = filterData && Math.ceil(filterData.length / 10);
  let pages = [];

  for (let i = 0; i < pagesNumber - 1; i++) {
    pages.push(i);
  }

  const onPageNumberClick = id => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(setCurrentPage(id + 1));
  };

  return (
    filterData.length > 10 && (
      <div className={classes['pages-wrapper']}>
        <Container>
          <div className={classes['pages']}>
            {pages.map(id => (
              <div onClick={() => onPageNumberClick(id)} key={id} className={classes['page']}>
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
