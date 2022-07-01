import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Container/Container';
import classes from './Breadcrumbs.module.scss';
import {
  setFilterData,
  setActiveCategory,
  setCurrentPage,
  setSearchData,
  setBreadcrumbs,
} from '../../../redux/data/dataActions';

export default function BasicBreadcrumbs() {
  const { breadcrumbs, fullData } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleClick(event) {
    event.preventDefault();
    if (event.target.id === '0') {
      dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]));
      dispatch(setActiveCategory('default'));
      dispatch(setFilterData(fullData));
      dispatch(setCurrentPage(0));
      dispatch(setSearchData(fullData));
    }
    history.push(event.target.name);
  }

  return (
    <Container>
      <div style={{ marginTop: '10px' }} role="presentation" onClick={handleClick}>
        <Breadcrumbs className={classes['breadcrumbs']} aria-label="breadcrumb">
          {breadcrumbs.map(({ name, href }, index) => (
            <Link key={index} id={index} name={href} underline="hover" color="inherit" href={href}>
              {name}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
    </Container>
  );
}
