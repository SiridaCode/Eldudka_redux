export const filterData = data => {
  const newData = data.filter(
    value =>
      value.availability &&
      value.availability.galery &&
      value.availability.tuhach &&
      value.availability.kulakova &&
      value.availability.shokolad
  );

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
