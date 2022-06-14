import { IDataProps } from "../types/types";

export const filteredProductsByCategory = (fullData: IDataProps[], category: string): IDataProps[] => {
  const filterCategory: IDataProps[] = fullData.filter((value):Boolean => {
    const lowerValue: string = value.name.toLowerCase();
    const lowerCategory: string = category.toLowerCase();
    return lowerValue.includes(lowerCategory.slice(0, 3));
  });
  return filterCategory;
};

export const filteredProductsBySearch = (fullData: IDataProps[], value: string): IDataProps[] => {
  const filteredProducts: IDataProps[] = fullData.filter((item): Boolean => {
    const lowerItem: string = item.name.toLowerCase();
    const lowerValue: string = value.toLowerCase();
    return lowerItem.includes(lowerValue);
  });
  return filteredProducts;
};

export const selectedCard = (fullData: IDataProps[], id: number) => {
  const selectSearch: IDataProps[] = fullData.filter((item, index) => id === index);
  return selectSearch;
};
