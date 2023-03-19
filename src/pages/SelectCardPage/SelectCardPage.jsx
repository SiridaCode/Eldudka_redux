import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import useWindowSize from '../../hooks/UseWindowResize';
import SelectCardPageClassic from './SelectCardPageClassic';
import SelectCardPageMobile from './SelectCardPageMobile';

const SelectCardPage = () => {
  let [responseData, setResponseData] = useState(null);
  const { width } = useWindowSize();

  let { card } = useParams();

  useEffect(() => {
    fetch(`https://api.eldudka.ru/Product/GetById?id=${card}`)
      .then(response => response.json())
      .then(data => {
        setResponseData(data);
      });
  }, []);
  return width > 860 ? (
    <SelectCardPageClassic responseData={responseData} />
  ) : (
    <SelectCardPageMobile responseData={responseData} />
  );
};

export default SelectCardPage;
