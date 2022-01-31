import * as React from "react";
import Card from "./Card";
import Pagination from './Pagination';
import HeaderCategories from "./Header/HeaderCategories";

const Container = ({ currentPage, currentData }) => {

    return (
        <div className="wrapper">
            <div className='container'>
                {currentData && currentData.slice(currentPage * 10, (currentPage + 1) * 10).map((item, index) => <Card data={item} key={index} />)}
            </div>
        </div>
    )
}
export default Container;

