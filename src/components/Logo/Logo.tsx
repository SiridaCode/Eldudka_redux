import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <img src="../logo.png" alt="logo" style={{ height: '60px' }} />
  </Link>
);

export { Logo };
