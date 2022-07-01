import * as React from 'react';
import classes from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
