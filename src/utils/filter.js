export const filterData = data => {
  const newData = data.filter(value => {
    if (value.availability) {
      const { galery, kulakova, tuhach, shokolad } = value.availability;
      return galery || kulakova || tuhach || shokolad;
    }
  });
  return newData;
};

export const filteredProductsByCategory = (fullData, category) => {
  const filterCategory = fullData.filter(value => {
    const lowerValue = value.name.toLowerCase();
    const lowerCategory = category.toLowerCase();
    return lowerValue.includes(lowerCategory.slice(0, 3));
  });
  return filterCategory;
};

export const selectedCard = (fullData, id) => {
  const selectSearch = fullData.filter((item, index) => {
    return id === index;
  });
  return selectSearch;
};

export const filteredProductsBySearch = (fullData, value) => {
  const filteredProducts = fullData.filter((item, index) => {
    return item.name.includes(value);
  });
  return filteredProducts;
};
