import React from 'react';

import './styles.css';

const Battery = ({ items }) => {
  return (
    <div className="battery">
      {items.map((item, index) => (
        <div style={{ background: item }} key={index} className="battery__item"></div>
      ))}
    </div>
  );
};

export default Battery;
