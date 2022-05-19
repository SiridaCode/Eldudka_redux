import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BasicBreadcrumbs() {
  const { breadcrumbs } = useSelector(({ data }) => data);
  const history = useHistory();
  function handleClick(event) {
    event.preventDefault();
    history.push(event.target.name);
  }

  return (
    <div style={{ marginTop: '10px' }} role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map(({ name, href }) => (
          <Link name={href} underline="hover" color="inherit" href={href}>
            {name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
