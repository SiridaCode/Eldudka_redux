import { IDataProps } from "../../types/types";

export interface IBreadCrumbs {
    name: string
    href: string
  }
  
export type ActionProps = {
    type: string,
    payload: IDataProps,
  }
  
export interface IInitialState {
    filterData: IDataProps | [],
    fullData: IDataProps | [],
    searchData: IDataProps | [],
    activeCategory: string,
    currentPage: number,
    breadcrumbs: IBreadCrumbs[],
  }