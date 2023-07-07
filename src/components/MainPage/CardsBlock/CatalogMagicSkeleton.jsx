import React from 'react';
import ContentLoader from 'react-content-loader';

const CatalogMagic = ({
  width = 1366,
  heading = { width: 140, height: 24 },
  row = 2,
  column = 5,
  padding = 20,
  borderRadius = 0,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth * 1.45;

      const height2 = 20;

      const height3 = 20;

      const space = padding + height1 + (padding / 2 + height2) + height3 + padding * 1;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      const y2 = y1 + padding + height1;

      const y3 = y2 + padding / 2 + height2;

      list.push(
        <rect
          key={`${i}${j}`}
          x={x}
          y={y1}
          rx={borderRadius}
          ry={borderRadius}
          width={itemWidth}
          height={height1}
        />
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props}>
      {list}
    </ContentLoader>
  );
};

CatalogMagic.metadata = {
  name: 'I am Doong - I come from Việt Nam',
  github: 'toiladoong',
  description: 'CatalogMagic',
  filename: 'CatalogMagic',
};

export default CatalogMagic;
