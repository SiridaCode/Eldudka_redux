import React from 'react';

import './styles.css';

const Battery = ({ colors }) => {
  return (
    <div className="battery">
      {colors.map((color, index) => (
        <div style={{ background: color }} key={index} className="battery__item"></div>
      ))}
    </div>
  );
};

export default Battery;
