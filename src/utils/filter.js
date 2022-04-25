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

export const filteredProductsBySearch = (fullData, value) => {
  const filteredProducts = fullData.filter((item, index) => {
    const lowerItem = item.name.toLowerCase();
    const lowerValue = value.toLowerCase();
    return lowerItem.includes(lowerValue);
  });
  return filteredProducts;
};

export const selectedCard = (fullData, id) => {
  const selectSearch = fullData.filter((item, index) => id === index);
  return selectSearch;
};

export const colors = shop => {
  return shop < 1
    ? []
    : shop >= 1 && shop <= 3
    ? ['#BD1616']
    : shop >= 4 && shop <= 5
    ? ['#BD8E16', '#BD8E16']
    : shop >= 6 && shop <= 9
    ? ['#9CBD16', '#9CBD16', '#9CBD16']
    : ['#23BD16', '#23BD16', '#23BD16', '#23BD16'];
};
